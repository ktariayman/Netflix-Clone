import React  , {useState}from 'react'
import { auth } from '../firebase'
import { useRef } from 'react'
import "./SignupScreen.css"
function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
    ).then(() => {

    }).catch((error) => {
        alert(error.message);
    })
    }
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <label className="label_email">Email</label>

                <input ref={emailRef} type="email" placeholder="email" />
                <label>Password</label>
                
                <input ref={passwordRef} type="password" placeholder="password" />
                <button type="submit" onClick={signIn} >Sign In</button>
                
                <div className="login-remember-me-label-text-checkbox" >
                    <input type='checkbox' />
                    <label ><span class="login-remember-me-label-text">Remember me</span></label>
                    <a href="#" >Need help?</a>
                </div>
                <div className="signinwithfacebook">
                    
                            <button class="signinwithfacebook__facebook">Login with Facebook</button>
                    
                </div>
                <div className="new_to-netflix">
                    <span>New to Netflix?</span> 
                    <a onClick={register} >Sign up now</a>.
                </div>
            </form>
        </div>
    )
}

export default SignupScreen
