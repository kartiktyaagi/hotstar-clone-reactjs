import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { Provider } from "react-redux";
import store from "./app/store";

const firebaseConfig = {
  apiKey: "AIzaSyDgGTCIt_xbZNyQh7X8md-5FauX5G4MycU",
  authDomain: "disney-clone-17570.firebaseapp.com",
  projectId: "disney-clone-17570",
  storageBucket: "disney-clone-17570.appspot.com",
  messagingSenderId: "594576682173",
  appId: "1:594576682173:web:2ee5f6bbc1e69e109b5bd4",
  measurementId: "G-XZDL1PTLMK",
};

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
