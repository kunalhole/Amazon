import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQwWow_wxvBHcdNy8PDyKYM1E-EXM2NjQ",
  authDomain: "fir-c152a.firebaseapp.com",
  projectId: "fir-c152a",
  storageBucket: "fir-c152a.appspot.com",
  messagingSenderId: "1029821483134",
  appId: "1:1029821483134:web:438ef9f51908954e96b02f",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { app, db, auth }
