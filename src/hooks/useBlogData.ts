import { useState, useEffect } from 'react'
import { fs } from '../config/config'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { Blog, BlogData } from '../types/types'

export const useBlogData = (): BlogData => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const querySnapshot = await getDocs(collection(fs, 'blog'))
        const blogData = querySnapshot.docs.map(async (doc) => {
          const data = doc.data()
          // Обработка картинки
          if (data.header_image) {
            const storage = getStorage()
            const storageRef = ref(storage, data.header_image)
            const url = await getDownloadURL(storageRef)
            data.header_image = url
          }
          // Обработка времени
          if (data.publish_time && data.publish_time.seconds) {
            const timestamp = data.publish_time
            const date = new Date(timestamp.seconds * 1000)
            data.publish_time = date.toLocaleDateString()
          }
          return { id: doc.id, ...data } as Blog
        })
        const resolvedBlogData = await Promise.all(blogData)
        setBlogs(resolvedBlogData)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка получения данных блога:', error)
        setLoading(false)
      }
    }

    getBlogData()
  }, [])

  return { blogs, loading }
}
