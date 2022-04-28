import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SignUpForm from '../Components/SignUpForm';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

export default function Signup() {
    const [user, setUser] = useState({name: "", email: "", })
    const [error, setError] = useState("");
    const history = useHistory();


    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'orange', 
      };

      //handles the signup
      const Signup = (data) => {
            fetch("https://api.ambeedata.com/latest/pollen/by-place?place=" + data.location, {
                // "method": "GET",
                "headers": {
                    "x-api-key": process.env.REACT_APP_AMBEE_API_KEY,
                    "Content-type": "application/json"
                }
            }).then((response) => {
                response.json().then(apiData => {
                    // validates location
                    if (apiData.message !== 'success') {
                        alert("Invalid location");
                        return;
                    }
                    // validates password
                    if (data.password != data.confirmPassword) {
                        alert("Passwords do not match");
                        return;
                    }
                    //create user in firebase 
                    auth.createUserWithEmailAndPassword(data.email, data.password)
                        .then(userCredentials => {
                            const user = userCredentials.user;
                            console.log("created user: ", user);
                            const firestore = getFirestore();

                            const name = data.name;
                            const location = data.location;
                            const uid = user.uid;

                            setDoc(doc(firestore, "users", uid), {
                                name: name, 
                                location: location
                            })
                                .then(() => {
                                    // log the action
                                    var date = new Date();
                                    var dateLabel = date.toString();
                                    setDoc(doc(firestore, "logs", dateLabel), {
                                         action: "signed up for an account",
                                         user: uid,
                                    })
                                        .then(() => {
                                            history.push({
                                                pathname:"/dashboard", 
                                                // pass the data as a prop to display
                                                state: {data, uid, apiData}
                                              });
                                        })
                                })
                        })
                })
            });
      }


    return (
    <div >
        <div>
            <header>Pollen Patrol</header>
            <SignUpForm Signup={Signup} error={error}/>
            <div>...</div>
            <Link to="/" style={linkStyle}>Already have an account? Login Here</Link>
        </div>
    </div>
  )
}
