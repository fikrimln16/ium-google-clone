import './App.css';
import google from "./assets/google-logo.png"
import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const login = {
    email: email,
    password: password,
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
    setError("Harap masukkan Email dan Password!");
    return;
    } else {
    console.log(login);
    axios
        .post("http://localhost:5000/login", login)
        .then((response) => {
        // console.log(response.data.user_id)s
        alert("Password salah, pastikan masukkan yang benar!");
        })
        .catch((err) => setError("Email dan Password salah!"));
    }
};

  return (
    <div className="App">
      <div className="wrapper">
        <div className="top-content">
          <img src={google} alt=""/>
          <h2>Sign in</h2>
          <p className="heading">Use your Google Account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <div className="inputs">
            <input type="email" id="email" className="input" value={email} onChange={handleEmailChange} placeholder='Email' />
          </div>
          <p>Password</p>
          <div className="inputs">
              <input type="password" id="email" className="input" onChange={handlePasswordChange} placeholder='Password'/>
          </div>
          <a href="" className="link-btn">Forgot Email?</a>
          <p className="color">Not your Computer? Use Guest mode to sign in privately.</p>
          <a href="" className="link-btn">Learn More</a>
          <div className="btn-group">
            <button class="create-btn">Create account</button>
            <button type="submit" className="next-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}


// function App() {

//   return (
//     <div className="App">
//       <div className="wrapper">
//           <div className="top-content">
//               <img src={google} alt=""/>
//               <h2>Sign in</h2>
//               <p className="heading">Use your Google Account</p>
//           </div>
//           <div className="inputs">
//               <input type="email" id="email" className="input"/>
//               <label for="email" className="input-label">Email or Phone</label>
//           </div>
//           <p>Password</p>
//           <div className="inputs">
//               <input type="email" id="email" className="input"/>
//               <label for="email" className="input-label">Password</label>
//           </div>
//           <a href="" className="link-btn">Forgot Email?</a>
//           <p className="color">Not your Computer? Use Guest mode to sign in privately.</p>
//           <a href="" className="link-btn">Learn More</a>
//           <div className="btn-group">
//               <button className="create-btn">Create account</button>
//               <button className="next-btn">Next</button>
//           </div>
//       </div>

//     </div>
//   );
// }

export default App;
