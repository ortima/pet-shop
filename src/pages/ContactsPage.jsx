import React from 'react'
import Contacts from '../components/Contacts/Contacts'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const ContactsPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default ContactsPage
