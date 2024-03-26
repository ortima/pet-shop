import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import Articles from '../components/Articles/Articles'
import Products from '../components/Products/Products'
import FAQList from '../components/FAQ/FAQList'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Advantages from '../components/Advantages/Advantages'

import '../index.css'
import Scroll from '../components/Scroll/Scroll'

const Home = () => {
  return (
    <>
      <Header />
      <Scroll />

      <Banner />

      <main className="container">
        <Category />
        <Articles />
        <Products />
        <FAQList />
        <Advantages />
      </main>

      <Footer />
    </>
  )
}

export default Home
