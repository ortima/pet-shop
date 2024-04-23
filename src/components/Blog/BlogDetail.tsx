import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogData } from '../../hooks/useBlogData'

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { BlogData } from '../../types/types'

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>()
  const { loading, blogs } = useBlogData() as BlogData

  const blog = blogs.find((blog) => blog.id === blogId)

  return (
    <>
      <LoadingSpinner isLoading={loading} />
      {!loading && blog && (
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {blog.title}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {blog.publish_time}
              </a>
            </div>

            <img
              src={blog.header_image}
              className="w-1/2 object-cover lg:rounded"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">{blog.content}</p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default BlogDetail
