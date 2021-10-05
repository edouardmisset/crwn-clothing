import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyC7ndcBEoFD84ivOrPtYiXD1RA90Kx-SLw',
  authDomain: 'crwn-db-c60a7.firebaseapp.com',

  projectId: 'crwn-db-c60a7',
  storageBucket: 'crwn-db-c60a7.appspot.com',
  messagingSenderId: '613727347178',
  appId: '1:613727347178:web:24f3600bbbc5626cde9293',
  measurementId: 'G-ZW146JPL39',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
