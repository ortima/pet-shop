export interface FaqData {
  question: string
  answer: string
}

export interface Blog {
  id: string
  title: string
  content: string
  header_image?: string
  publish_time?: string
}

export interface BlogData {
  blogs: Blog[]
  loading: boolean
}

export interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
}
