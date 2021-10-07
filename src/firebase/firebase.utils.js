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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If userAuth does not exist, return
  if (!userAuth) return

  // Get (query) the userRef from firestore from its uid
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // Get the snapshot from the userRef
  const snapShot = await userRef.get()
  // If there is no snap shot, create a new user / userRef
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('error creating user', error.message)
    }
  }
  // Return the userRef in any case
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
