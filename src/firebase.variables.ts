import Firebase from 'firebase/firebase';

let config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};

const app = Firebase.initializeApp(config);

export const auth = app.auth();