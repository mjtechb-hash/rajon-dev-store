import { initializeApp, getApps, getApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

// আপনার Firebase Config (আপনি আগেই দিয়েছিলেন)
const firebaseConfig = {
  apiKey: "AIzaSyB1Lx6IQ3di11ia-DXW43-gqtzLYd4oVtM",
  authDomain: "rajon-dev-store-b4668.firebaseapp.com",
  databaseURL: "https://rajon-dev-store-b4668-default-rtdb.firebaseio.com",
  projectId: "rajon-dev-store-b4668",
  storageBucket: "rajon-dev-store-b4668.firebasestorage.app",
  messagingSenderId: "651626347075",
  appId: "1:651626347075:web:8d5e6da1de0a82df4f72f6"
}

// Firebase Singleton (একবার initialize হবে)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getDatabase(app)
const auth = getAuth(app)

export { app, db, auth }
