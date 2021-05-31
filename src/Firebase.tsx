import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDqX2ruBrlBYdh2E4ziPaKg23bGf7JpO3g",
  databaseURL: "https://mobile-app-5877f-default-rtdb.firebaseio.com/",
  projectId: "mobile-app-5877f"
};
firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;