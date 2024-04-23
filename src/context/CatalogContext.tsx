import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react'
import { getStorage } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { fs } from '../config/config'
import { CatalogItem, CatalogContextType } from './types/catalogTypes'

const CatalogContext = createContext<CatalogContextType>({
  items: [],
  loading: true,
})

interface CatalogProviderProps {
  children: ReactNode
}

export const CatalogProvider: React.FC<CatalogProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<CatalogItem[]>([])
  const [loading, setLoading] = useState(true)
  const storage = getStorage()

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(fs, 'catalog'))

        const items: CatalogItem[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          const mainImageURL = `https://firebasestorage.googleapis.com/v0/b/${
            storage.app.options.storageBucket
          }/o/${encodeURIComponent(data.main_image)}?alt=media`
          items.push({
            id: doc.id,
            name: data.name,
            description: data.description,
            fulldesc: data.fulldesc,
            price: data.price,
            brand: data.brand,
            category: data.category,
            type: data.type,
            imageSrc: mainImageURL,
            addedOn: data.added_on.toDate(),
            hit: data.hit,
          })
        })

        setItems(items)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching food items:', error)
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  return (
    <CatalogContext.Provider value={{ items, loading }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = () => useContext(CatalogContext)
