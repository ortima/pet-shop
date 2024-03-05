import React from 'react'
import Header from '../components/Header/Header'
import Category from '../components/Category/Category'
import Articles from '../components/Articles/Articles'
import Products from '../components/Products/Products'
import FAQList from '../components/FAQ/FAQList'
import Footer from '../components/Footer/Footer'
import '../index.css'
import Advantages from '../components/Advantages/Advantages'

const Home = () => {
    return (
        <div>
            <Header />
            {/* wrapper - контейнер в index.css */}
            <main className="wrapper">
                <Category />
                <Articles />
                <Products />
                <FAQList />
                <Advantages />
            </main>
            <Footer />
        </div>
    )
}

export default Home
