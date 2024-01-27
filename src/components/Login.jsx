import "./Login.css"
import LoginForm from "./LoginForm"
import Navbar from "./Navbar"
import {React,useState} from 'react'


const Login = () => {

  
  return (
    <div>
      <Navbar/>
      <div className="bgimg">
            <h3 id="text">Welcome Volunteer</h3>
            <p>Welcome abroad. Your commitment Lorem ipsum dolor sit amet consectetur adipisicing elit. Necee nulla architecto quaerat saepe tempora.</p>
            <LoginForm />
           
      </div>
    </div>
  )
}

export default Login