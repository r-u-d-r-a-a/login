
import './App.css';
import Welcome from './Welcome.js'; 
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

import {Link} from 'react-router-dom';



function App() {

  const [data,setData] = useState("")

  const handleFailure = (result) =>
  {
    alert(result);

  };

  const handleLogin = (googleData) =>
  {
    console.log(googleData);

   setData(googleData.profileObj.email);

    console.log(googleData.profileObj.email);

  //window.location.href="http://localhost:3000/welcome"


  };



  return (
    <div className="App">
      <header className="App-header">
      
        React login
        
          <GoogleLogin

        clientId = {"624737974358-kf111ohntkehsktug73crctr6fgju6qc.apps.googleusercontent.com"} 
        buttonText = "Log in with Google"
         onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}       

        >
          
        </GoogleLogin>
        
        

      {/* <h1>{data}</h1> */}

      </header>
    </div>
  );
}

export default App;
