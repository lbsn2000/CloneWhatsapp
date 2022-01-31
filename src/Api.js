import { initializeApp } from "firebase/app";
import FirebaseApp from "./FireBaseConfig";
import { FacebookAuthProvider, getAuth  } from "firebase/auth";

const db = initializeApp(FirebaseApp)
const auth = getAuth();

FacebookAuthProvider