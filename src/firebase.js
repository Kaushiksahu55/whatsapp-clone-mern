// import react from 'react'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCwqR-2QVht0S_FVh5YN0OUDvsXkKfEM4M",
  authDomain: "whatsapp-mern-2ebb9.firebaseapp.com",
  projectId: "whatsapp-mern-2ebb9",
  storageBucket: "whatsapp-mern-2ebb9.appspot.com",
  messagingSenderId: "306284649018",
  appId: "1:306284649018:web:cbf9b7ec02f20ee0023303",
  measurementId: "${config.measurementId}"
};

  const app =  initializeApp(firebaseConfig);
  const db = app.firestore(); 
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;