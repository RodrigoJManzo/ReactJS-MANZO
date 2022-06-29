
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGa3iJQnxxQoP4ol-GoLELKJy6FAIhRgc",
  authDomain: "supertec-ecommerce.firebaseapp.com",
  projectId: "supertec-ecommerce",
  storageBucket: "supertec-ecommerce.appspot.com",
  messagingSenderId: "239291246358",
  appId: "1:239291246358:web:b31d17a17812b63b865237"
};


const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () =>{
    return app;
}

