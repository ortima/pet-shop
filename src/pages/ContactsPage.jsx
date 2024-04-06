import Contacts from '../components/Contacts/Contacts'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const ContactsPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl h-full mx-auto">
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default ContactsPage
