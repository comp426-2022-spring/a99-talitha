import React from 'react';
import { auth } from '../firebase';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from 'style-components';

export default function Dashboard(props) {
  const history = useHistory();
  const data = props.location.state.data;
  const uid = props.location.state.uid;
  console.log("uid: ", uid);
  // grabs location
  const location = props.location.state.location;

  //handles the signout and changes the auth
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("signed out");
        history.push("/");
      })
      .catch(error => alert(error.message))
  }

  // redirects to account info page with data and uid
  const handleAccount = () => {
    history.push({
      pathname:"/account", 
      state: {data, uid}
    });
  }


  const btnStyle = {
    margin: "1rem",
    color: 'orange', 
  };


  return (
    <>
      <div>
        <>
          <Button onClick={handleAccount} style={btnStyle}>Account Info</Button>
          <Button onClick={handleSignOut} style={btnStyle}>Sign Out</Button>
        </>
        <div>...</div>
        <header>Dashboard </header>
        <header>Hello, {data.name}</header>
      </div>
    </>
  )
}
