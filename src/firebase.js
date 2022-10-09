import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// firebase config
const config = {
  apiKey: "AIzaSyC4uQluP7awz74bkoYpUa4Ohnz8tiTC_EU",
  authDomain: "ecommerce-2e788.firebaseapp.com",
  projectId: "ecommerce-2e788",
  storageBucket: "ecommerce-2e788.appspot.com",
  messagingSenderId: "384130655090",
  appId: "1:384130655090:web:1c0e8fbdb8b38c90f3f3eb"
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
