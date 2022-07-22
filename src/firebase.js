import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAPPLQgm-a2bKbBc84tx7Qq8cppuAbwzaY",
  authDomain: "aswin-message.firebaseapp.com",
  databaseURL: "https://aswin-message.firebaseio.com",
  projectId: "aswin-message",
  storageBucket: "aswin-message.appspot.com",
  messagingSenderId: "920543388310",
  appId: "1:920543388310:web:08e13747412d15c33898b7",
  measurementId: "G-7NCQCN5YSZ"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
