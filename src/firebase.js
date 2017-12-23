import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID
})

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore()
export const getServerTimestamp = firebase.firestore.FieldValue.serverTimestamp
