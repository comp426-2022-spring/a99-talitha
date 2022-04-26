import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

export default function Login() {
    const [user, setUser] = useState({name: "", email: "", })
    const [error, setError] = useState("");
    const history = useHistory();

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'orange', 
      };

    const Login = (details) => {
        console.log(details);
        // signs in with email and pass
        auth.signInWithEmailAndPassword(details.email, details.password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with: " + user.email);
              const uid = auth.currentUser?.uid;
              const firestore = getFirestore();
              //fetches the document from firestore
              getDoc(doc(firestore, "users", uid)).then(docSnap => {
                  if (docSnap.exists()) {
                      var data = docSnap.data();

                    //log the action
                    var date = new Date();
                    var dateLabel = date.toString();
                    setDoc(doc(firestore, "logs", dateLabel), {
                        action: "signed in",
                        user: uid,
                    }).then(() => {

                        fetch("https://api.ambeedata.com/latest/pollen/by-place?place=" + data.location, {
                            "method": "GET",
                            "headers": {
                                "x-api-key": "",
                                "Content-type": "application/json"
                            }
                        })
                        .then(response => {
                            response.json().then(apiData => {
                                console.log("here is the response: ", apiData);
                                history.push({
                                        pathname:"/dashboard", 
                                        // pass the data as a prop to display
                                        state: {data, uid, apiData}
                                      });
                            })
                        })
                        .catch(err => {
                            console.error(err);
                        });
                        // history.push({
                        //     // TO DO: Log to interaction DB here 
                        //     // redirects to dashboard
                        //     // TO DO: do API call here
                        //     pathname:"/dashboard", 
                        //     // pass the data as a prop to display
                        //     state: {data, uid}
                        //   });
                    });
                  } else {
                      console.log("Did not get data.");
                  }
              })
        }).catch(error => alert(error.message))
    }

    return (
    <div >
        <div>
            <header>Pollen Patrol</header>
            <LoginForm Login={Login} error={error}/>
            <div>...</div>
            <Link to="/signup" style={linkStyle}>Don't have an account? Sign Up Here</Link>
        </div>
    </div>
  )
}
