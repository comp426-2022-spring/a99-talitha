import React from 'react'
import { Button } from 'style-components';
import ChangeLocation from '../Components/ChangeLocation';
import { getFirestore, setDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { auth } from '../firebase';
// import { deleteUser, getAuth } from "firebase/auth";

export default function Account(props) {
    const data = props.location.state.data;
    const history = useHistory();
    const uid = props.location.state.uid;
    const firestore = getFirestore();
    console.log("uid: ", uid);

    const btnStyle = {
        margin: "1rem",
        color: 'orange', 
      };

      // handles updating the location
      const Update = (details) => {
        const location = details.location;
        //updates the document in firestore
        updateDoc(doc(firestore, "users", uid), {
            location: location,
            }).then(() => {
                // fetches the complete new document
                getDoc(doc(firestore, "users", uid)).then(docSnap => {
                    if (docSnap.exists()) {
                        var data = docSnap.data();
                        // alerts user and brings them back home
                        alert("We have recieved your update.");
                        history.push({
                          pathname:"/account", 
                          state: {data, uid}
                        });
                    } else {
                        console.log("Did not get data.");
                    }
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
                    history.push({
                        pathname:"/", 
                      });
                })
            })
        }

    
  return (
      <div>
          <header>{data.name}'s Account</header>
          <header>Your current location is: {data.location}</header>
          <ChangeLocation Update={Update}/>
          <Button style={btnStyle} onClick={deleteAccount}>Delete My Account</Button>
      </div>
  )
}
