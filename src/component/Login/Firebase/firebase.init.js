import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilizationauthentication = () => {
    initializeApp(firebaseConfig);

}
export default initilizationauthentication;