// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJ6RqnFQBJYDBGkcrU5Asz8VhfUhMrv9E',
  authDomain: 'pet-shop-react.firebaseapp.com',
  projectId: 'pet-shop-react',
  storageBucket: 'pet-shop-react.appspot.com',
  messagingSenderId: '280887780926',
  appId: '1:280887780926:web:3ed16e1de2ca1c9d75936f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fs = getFirestore(app)
const auth = getAuth(app)
// Initialize Firebase Authentication and get a reference to the service
export { fs, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
