import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl h-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
