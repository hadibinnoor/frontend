import {React,useState} from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {

      const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div>
      <form action="" className="sign_form">
                  <input type="text"  value={username} onChange={(e)=>{
                        setUsername(e.target.value)} }/>
                  <input type="text" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                  }}/>
                  <button>Sign in</button>
                  <button>dg</button>
                  <button>Login As organization</button>
                  <p>Dont have an account? <Link to="/Signup"> Signup</Link></p>
                  
            </form>
    </div>
  )
}

export default LoginForm