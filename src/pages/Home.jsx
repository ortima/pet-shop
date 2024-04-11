import Category from '../components/Category/Category'
import Articles from '../components/Articles/Articles'
import Products from '../components/Products/Products'
import FAQList from '../components/FAQ/FAQList'
import Banner from '../components/Banner/Banner'
import Advantages from '../components/Advantages/Advantages'

import '../index.css'

const Home = () => {
  return (
    <>
      <Banner />

      <Category />
      <Articles />
      <Products />
      <FAQList />
      <Advantages />
    </>
  )
}

export default Home
