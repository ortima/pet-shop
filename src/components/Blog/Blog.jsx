import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

export const Blog = ({ blogs, loading }) => {
  return (
    <>
      <LoadingSpinner isLoading={loading} />
      {!loading && (
        <div className="max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <div className="py-12 border-b-4 border-gray-100" key={blog.id}>
              <div className="flex flex-wrap lg:flex-nowrap items-center">
                <div className="w-full lg:w-auto  mb-8 lg:mb-0">
                  <img
                    className="block w-44 h-30 rounded-[10px]"
                    src={blog.header_image}
                    alt={blog.header_image}
                  />
                </div>
                <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
                  <div className="max-w-2xl">
                    <span className="block text-gray-400 mb-1">
                      {blog.publish_time}
                    </span>
                    <p className="text-2xl font-semibold text-gray-900">
                      {blog.title}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-auto px-4 ml-auto text-right">
                  <Link
                    to={`/blog/post/${blog.id}`}
                    className="inline-flex items-center text-xl font-semibold
                    text-orange-900 hover:text-gray-900"
                  >
                    <span className="mr-2">Подробнее</span>
                    <svg
                      className="animate-bounce"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33301 14.6668L14.6663 1.3335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M1.33301 1.3335H14.6663V14.6668"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
