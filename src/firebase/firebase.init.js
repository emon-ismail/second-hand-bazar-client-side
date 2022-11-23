import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
   authDomain: process.env.REACT_APP_authDomain,
   projectId: process.env.REACT_APP_projectId,
 storageBucket: process.env.REACT_APP_storageBucket,
   messagingSenderId: process.env.REACT_APP_messagingSenderId,
   appId: process.env.REACT_APP_appId,
   

//  apiKey: "AIzaSyD3gj9fvQ_MHNpyPanuivGZOY6EM3gMUqY",
//  authDomain: "assignment-10-af771.firebaseapp.com",
//  projectId: "assignment-10-af771",
//  storageBucket: "assignment-10-af771.appspot.com",
// messagingSenderId: "887032439639",
// appId: "1:887032439639:web:3eccac5b025b331c0d1412"
}

const app = initializeApp(firebaseConfig)

export default app
