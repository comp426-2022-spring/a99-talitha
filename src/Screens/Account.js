import React from 'react'
import { Button } from 'style-components';
import ChangeLocation from '../Components/ChangeLocation';
import { getFirestore, setDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { auth } from '../firebase';
// import { deleteUser, getAuth } from "firebase/auth";

export default function Account(props) {
    const data = props.location.state.data;
    let apiData = props.location.state.apiData;
    const history = useHistory();
    const uid = props.location.state.uid;
    const firestore = getFirestore();
    console.log("uid: ", uid);

    const btnStyle = {
        margin: "1rem",
        color: 'orange', 
      };


      const Update = (details) => {
        fetch("https://api.ambeedata.com/latest/pollen/by-place?place=" + details.location, {
            // "method": "GET",
            "headers": {
                "x-api-key": process.env.REACT_APP_AMBEE_API_KEY,
                "Content-type": "application/json"
            }
        }).then((response) => {
            response.json().then(newApiData => {
                // validates location
                if (newApiData.message !== 'success') {
                    alert("Invalid location");
                    return;
                }
                apiData = newApiData;
                const location = details.location;
                updateDoc(doc(firestore, "users", uid), {
                    location: location
                })
                    .then(() => {
                        getDoc(doc(firestore, "users", uid)).then(docSnap => {
                            if (docSnap.exists()) {
                                var data = docSnap.data();
                                // alerts user and brings them back home
                                alert("We have recieved your update.");

                                //log the action
                                var date = new Date();
                                var dateLabel = date.toString();
                                setDoc(doc(firestore, "logs", dateLabel), {
                                    action: "updated location",
                                    user: uid,
                                }).then(() => {

                                    history.push({
                                        pathname:"/account", 
                                        state: {data, uid, apiData}
                                      });
                                });

                            } else {
                                console.log("Did not get data.");
                            }
                        })
                    })
            })
        });
      }

        const deleteAccount = () => {
            // deletes from firestore
            deleteDoc(doc(firestore, "users", uid)).then(() => {
                console.log("deleted account");
                //deletes in firebase
                auth.currentUser.delete().then(() => {
                    alert("Your account has been deleted.");
                    //log the action
                    var date = new Date();
                    var dateLabel = date.toString();
                    setDoc(doc(firestore, "logs", dateLabel), {
                        action: "deleted account",
                        user: uid,
                    }).then(() => {
                       // redirects to sign in
                       history.push({
                         pathname:"/", 
                       });
                    });
                })
            })
        }

        const backToDash = () => {
            history.push({
                pathname:"/dashboard", 
                // pass the data as a prop to display
                state: {data, uid, apiData}
              });
        }

    
  return (
      <div>
          <header>{data.name}'s Account</header>
          <header>Your current location is: {data.location}</header>
          <ChangeLocation Update={Update}/>
          <Button style={btnStyle} onClick={deleteAccount} className='button'>Delete My Account</Button>
          <Button style={btnStyle} onClick={backToDash} className='button'>Back to Dashboard</Button>
      </div>
  )
}
