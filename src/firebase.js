import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDx9y3tsIV8J-UW04SdEkpJXlqK1VtSRvU",
  authDomain: "messenger-4075a.firebaseapp.com",
  databaseURL: "https://messenger-4075a.firebaseio.com",
  projectId: "messenger-4075a",
  storageBucket: "messenger-4075a.appspot.com",
  messagingSenderId: "383938610219",
  appId: "1:383938610219:web:013e865e4a545a1038966e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db