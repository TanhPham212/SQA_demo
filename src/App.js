import React, { useState, useEffect } from 'react'
import fire from './fire'
import './App.css';
import Login from './components/Login'
import Ticket from './components/Ticket'

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      })
  }


  const handleLogout = () => {
    fire.auth().signOut()    
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user)
      {
        clearInputs()
        setUser(user)
      }
      else
      {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="container">
      {user ? 
        (<Ticket 
          handleLogout={handleLogout}
        />)
      :
        (<Login 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          handleLogin = {handleLogin}
          emailError = {emailError}
          passwordError = {passwordError}
        />)
      }
    </div>
  );
}

export default App;