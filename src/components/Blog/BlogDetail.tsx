import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogData } from '../../hooks/useBlogData'

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { BlogData } from '../../types/types'

import styles from './styles.module.scss'

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
              <span className="py-2 text-orange-500 inline-flex items-center justify-center mb-2">
                {blog.publish_time}
              </span>
            </div>
            <div className="flex justify-between gap-6">
              <img
                src={blog.header_image}
                className="w-1/2 object-cover lg:rounded"
              />
              <div className='text-gray-700 text-lg leading-relaxed"'>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: blog.desc ?? '' }}
                ></div>
                <div className="mt-8">
                  {blog.tag?.map((item) => (
                    <div className="py-1 px-2 inline-block mx-2  bg-orange-300 text-white rounded-full">
                      <span className="text-rose-500">#</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: blog.content ?? '' }}
              ></div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default BlogDetail
