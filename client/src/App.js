import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import AuthContext from './context'
import jwt from 'jsonwebtoken'

const App = () => {

  const parseCookie = str =>
    str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
  }, {});

  const [Auth, setAuth] = useState({...jwt.decode(parseCookie(document.cookie).token)});

  return (
    <AuthContext.Provider value={{
      Auth,
      setAuth
    }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
