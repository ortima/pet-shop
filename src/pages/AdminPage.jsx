import React, { useState } from 'react'
import { getStorage, ref } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { fs } from './../config/config'

const AdminPage = () => {
  const [foodItems, setFoodItems] = useState([])
  const storage = getStorage()

  const getAllFoodItems = async () => {
    const querySnapshot = await getDocs(collection(fs, 'catalog'))

    const items = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      console.log(data)
      const mainImageURL = `https://firebasestorage.googleapis.com/v0/b/${
        storage.app.options.storageBucket
      }/o/${encodeURIComponent(data.main_image)}?alt=media`
      items.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        brand: data.brand,
        category: data.category,
        type: data.type,
        mainImage: mainImageURL,
        addedOn: data.added_on.toDate(),
        images: data.images,
      })
    })

    setFoodItems(items)
  }

  return (
    <div>
      <button className="bg-black text-white p-4" onClick={getAllFoodItems}>
        Fetch data
      </button>
      <div className="flex gap-4">
        {foodItems.map((item) => (
          <div key={item.id}>
            <h2>Name: {item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Brand: {item.brand}</p>
            <p>Category: {item.category}</p>
            <p>Type: {item.type}</p>
            <p>Added On: {item.addedOn.toString()}</p>
            <img
              className="w-[300px] h-[300px]"
              src={item.mainImage}
              alt="Main Image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPage
