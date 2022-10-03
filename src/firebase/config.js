import {
  getFirestore,
  collection,
} from 'firebase/firestore'

import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


// INIT FIREBASE
export const app = initializeApp(firebaseConfig);


// INIT SERVICES
export const db = getFirestore()


// FIREBASE CLOUD STORAGE
export const storage = getStorage(app)


// QUERIES
// export const q = query(colRefOrder, orderBy('createdAt'))


// GET REAL TIME COLLECTION DATA
// onSnapshot(q, (snapshot) => {
//   let orders = []
//   snapshot.docs.forEach((doc) => {
//     orders.push({ ...doc.data(), id: doc.id })
//   })
// })


// AUTHENTIFICATION
export const auth = getAuth(app)


// COLLECTIONS REF
export const colRefCollections = collection(db, 'collections')

export const colRefAbstract = collection(db, 'abstract')
export const colRefCatboatsFishing = collection(db, 'catboats-fishing')
export const colRefCaymanMemoriest = collection(db, 'cayman-memories')
export const colRefLiquidFlow = collection(db, 'liquid-flow')
export const colRefWoman = collection(db, 'woman')
export const colRefFauna = collection(db, 'fauna')
export const colRefFamilyTree = collection(db, 'family-tree')
export const colRefBeach = collection(db, 'beach')
export const colRefArtwork = collection(db, 'artwork')

// GET DOCS
