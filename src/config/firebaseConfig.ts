// firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGn7sxXG01zk1jl9DbJNHD4uqA5ypYOrg",
  authDomain: "eartexplorer.firebaseapp.com",
  projectId: "eartexplorer",
  storageBucket: "eartexplorer.appspot.com",
  messagingSenderId: "201552292481",
  appId: "1:201552292481:web:984b0e20707d95f3333b80"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
