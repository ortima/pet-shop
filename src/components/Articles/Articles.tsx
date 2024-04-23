import React from 'react'
import { useBlogData } from '../../hooks/useBlogData'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

const Articles: React.FC = () => {
  const { blogs, loading } = useBlogData()

  return (
    <section>
      <div className="container">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[30px] text-dark mb-4">
            <span className="text-primary">Популярные</span> новости
          </h2>
        </div>

        <LoadingSpinner isLoading={loading} />
        {!loading && (
          <div className="flex flex-wrap -mx-4 justify-between">
            {blogs.map((blog) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={blog.id}>
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src={blog.header_image}
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="bg-primary rounded inline-block text-center py-1 px-4 text-[14px] leading-loose font-semibold text-orange-500 mb-3">
                      {blog.publish_time}
                    </span>
                    <h3>
                      <Link
                        to={`/blog/post/${blog.id}`}
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                      >
                        {blog.title.length > 30
                          ? `${blog.title.slice(0, 27)}...`
                          : blog.title}
                      </Link>
                    </h3>
                    <Link to={`/blog/post/${blog.id}`}>
                      <button
                        type="button"
                        className="text-white px-5 py-2 rounded-[50px] font-semibold transition-all duration-75 bg-orange-500 hover:bg-black hover:scale-110"
                      >
                        Читать!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Articles
