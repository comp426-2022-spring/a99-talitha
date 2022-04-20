import React, { useState } from 'react'

export default function SignUpForm({Signup, error}) {
    const [details, setDetails] = useState({name: "", location: "", email: "", password: "", confirmPassword: ""});

    //primes the handler
    const submitHandler = e => {
        e.preventDefault();
        Signup(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input type="text" name="email" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="location"> Location </label>
                <input type="text" name="location" id="location" onChange={e => setDetails({...details, location: e.target.value})} value={details.location}/>
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password"> Password </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm password"> Confirm Password </label>
                <input type="password" name="confirm password" id="confirmPassword" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}/>
            </div>
            <input type="submit" value="Sign Up"/>
        </div>
    </form>
  )
}