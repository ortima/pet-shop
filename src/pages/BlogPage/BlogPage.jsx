import { Blog } from '../../components/Blog/Blog'
import { useBlogData } from '../../hooks/useBlogData'

const BlogPage = () => {
  const { blogs, loading } = useBlogData()
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
