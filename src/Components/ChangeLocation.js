import React, { useState } from 'react';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

export default function ChangeLocation({Update, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    //primes the handler
    const submitHandler = e => {
        e.preventDefault();
        Update(details);
    }


  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <div className="form-group">
                <label htmlFor="email"> New Location </label>
                <input type="text" name="location" id="location" onChange={e => setDetails({...details, location: e.target.value})} value={details.location}/>
            </div>
            <input type="submit" value="Update"/>
        </div>
    </form>
  )
}