import { useState } from 'react';
import Authentication from './Authentication';
import UnAuthentication from './UnAuthentication';
import './App.css';

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false);
  const [signUpData, setSignUpData] = useState(JSON.parse(window.localStorage.getItem("newToken")) || false);

  if (signUpData) {
    if (token.login === signUpData.newLogin && token.password === signUpData.newPassword) {
      return <Authentication />;
    } else {
      return <UnAuthentication setSignUpData={setSignUpData} setToken={setToken} />;
    }
  } else {
    if (token.login === "raimdjanof" && token.password === "123") {
      return <Authentication />;
    } else {
      return <UnAuthentication setSignUpData={setSignUpData} setToken={setToken} />;
    }
  }
}

export default App;
