import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBzNq5paZ0aRMcD8AUhkl1Ilj-ONf1fKU8',
  authDomain: 'dojo-tracker-86d71.firebaseapp.com',
  projectId: 'dojo-tracker-86d71',
  storageBucket: 'dojo-tracker-86d71.appspot.com',
  messagingSenderId: '726702249785',
  appId: '1:726702249785:web:934e427cd065ca0eeabae8'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { db, auth, storage, timestamp }
