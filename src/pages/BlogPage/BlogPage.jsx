import { useEffect, useState } from 'react'
import { Blog } from '../../components/Blog/Blog'
import { fs } from '../../config/config'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

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
          return { id: doc.id, ...data }
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

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-15 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
            НАШ БЛОГ
          </span>
          <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
            <span>Новости &</span>
            <span className="font-serif italic">Статьи</span>
          </h1>
        </div>
        <Blog blogs={blogs} loading={loading} />
      </div>
    </section>
  )
}
export default BlogPage
