import React from "react";
import "./App.css";
import GoogleLogin from 'react-google-login';

function App() {

    const respuestaGoogle=(respuesta)=>{
        console.log(respuesta);
        console.log(respuesta.profileObj); 
    }

    return(
        <div className="App">    
        <br /><br />
<GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="iniciar Sesion"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
/>,
  </div>
    );
}

export default App;