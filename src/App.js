import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Posts from './components/Posts';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL3Xc7RRvYX5ZoxlvLpmWI33_IB3g3wBc",
  authDomain: "portfolio-be6fa.firebaseapp.com",
  projectId: "portfolio-be6fa",
  storageBucket: "portfolio-be6fa.appspot.com",
  messagingSenderId: "566443814279",
  appId: "1:566443814279:web:76e036102b19408946b722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
