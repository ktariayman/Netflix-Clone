import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDghQAX90JPG2WGwRRQUAIEVlmlVBk3fwo",
//   authDomain: "netflixclone-ayman.firebaseapp.com",
//   projectId: "netflixclone-ayman",
//   storageBucket: "netflixclone-ayman.appspot.com",
//   messagingSenderId: "840855348378",
//   appId: "1:840855348378:web:5eb7939b0a998648fc6b23",
//   measurementId: "G-VW5EKX7LZC"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBmhDrLxen5Iy3VNzlCTu55RRr9nOJxEHc",
  authDomain: "netflix-clone-a9fd4.firebaseapp.com",
  projectId: "netflix-clone-a9fd4",
  storageBucket: "netflix-clone-a9fd4.appspot.com",
  messagingSenderId: "624128669384",
  appId: "1:624128669384:web:9f1c45d01db209936017fd",
  measurementId: "G-7D6SG15CQX"
};

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB8cm4p3Tnv-Jv_WjnBEif2Lg0tXyCinF0",
//   authDomain: "netflixclone-ay.firebaseapp.com",
//   projectId: "netflixclone-ay",
//   storageBucket: "netflixclone-ay.appspot.com",
//   messagingSenderId: "657552347004",
//   appId: "1:657552347004:web:df38369a2966959f805ef9",
//   measurementId: "G-VRLVL37TY6"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;