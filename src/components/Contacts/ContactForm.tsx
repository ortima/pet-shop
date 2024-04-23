import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full p-6 rounded-lg bg-[#292a2e] shadow-md">
      <h2 className="text-3xl text-white text-center font-bold mb-6">Form</h2>
      <form className="max-w-screen-sm mx-auto">
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-white text-sm font-semibold mb-2 text-left"
          >
            Ваше имя:
          </label>
          <input
            className="w-full px-3 p-2 border rounded-lg bg-white focus:border-blue-500"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-white text-sm font-semibold mb-2 text-left"
          >
            Ваш E-mail:
          </label>
          <input
            type="text"
            className="w-full px-3 p-2 border rounded-lg bg-white focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="block text-white text-sm font-semibold mb-2 text-left"
          >
            Ваш отзыв:
          </label>
          <textarea
            rows={4}
            className="w-full px-3 p-2 border rounded-lg bg-white focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-white font-semibold px-4 py-2 mx-auto rounded-lg hover:pink-600"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
