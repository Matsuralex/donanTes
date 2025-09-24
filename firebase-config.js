// Obtén tus datos desde la configuración del proyecto en Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBaBir5mquN-xK-6H-92Wcf_Mp6muY4cSQ",
  authDomain: "donantes-400ba.firebaseapp.com",
  projectId: "donantes-400ba",
  storageBucket: "donantes-400ba.firebasestorage.app",
  messagingSenderId: "202152301689",
  appId: "1:202152301689:web:5485bb0344ba6a821030a8",
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();    

// npm install firebase

// npm install -g firebase-tools