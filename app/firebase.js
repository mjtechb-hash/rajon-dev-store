import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Vercel Environment Variables থেকে সিকিউর ডেটা রিড করবে
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "rajon-dev-store.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: "rajon-dev-store",
  storageBucket: "rajon-dev-store.firebasestorage.app",
  messagingSenderId: "1055501896572",
  appId: "1:1055501896572:web:0a42be7eff6f2f7a76b2f9"
};

// অ্যাপ যেন বারবার ইনিশিয়ালাইজ না হয় তার সেফটি চেক
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
