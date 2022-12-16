import firebase from "firebase"

const config={
  apiKey: "AIzaSyAXT7xOqdeVI-e9sSxTPC4cRI_wTiRgxVs",
  authDomain: "auth-f45b4.firebaseapp.com",
  projectId: "auth-f45b4",
  storageBucket: "auth-f45b4.appspot.com",
  messagingSenderId: "795718229687",
  appId: "1:795718229687:web:a807de85c7cf09f7017732"
}

firebase.initializeApp(config);
export default firebase;