// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import fire from './components/fire';
import { useState,useEffect } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const[password,setPassword]=useState("");
  const[emailError,setEmailError]=useState("");
  const[passowrdError,setPasswordError]=useState("");
  const[hasAccount,setHasAccount]=useState(false);

const clearInputs=()=>{
  setEmail("");
  setPassword("");
}
const clearErrors=()=>{
  setEmailError("");
  setPasswordError("");
}

   const handleLogin=()=>{
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) =>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
   };

   const handleSignup=()=>{
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) =>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
        
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
   };
   const handleLogout=()=>{
    fire.auth().signOut();
   }
   const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    });
   };
   
   useEffect(()=>{
    authListener();
   },[])
  return (
    <>
    {user ? (
      <>
      <Navbar handleLogout={handleLogout}/>
      <HomePage/>
      </>
    ) :(
      <Login email={email} 
    setEmail={setEmail} 
    password ={password} 
    setPassword={setPassword} 
    handleLogin={handleLogin}
    handleSignup={handleSignup}
    hasAccount={hasAccount}
    setHasAccount={setHasAccount}
    emailError ={setEmailError}
    passowrdError={setPasswordError}
    />
    )}
    </>
  );
}

export default App;
