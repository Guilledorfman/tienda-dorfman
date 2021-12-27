
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGb8_dFBkGW7WanUfOeD3f3zLUHSaIeiI",
  authDomain: "tienda-dorfman-15a95.firebaseapp.com",
  projectId: "tienda-dorfman-15a95",
  storageBucket: "tienda-dorfman-15a95.appspot.com",
  messagingSenderId: "173304409377",
  appId: "1:173304409377:web:184041bbc7d98662606260"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () =>{
    return app
}