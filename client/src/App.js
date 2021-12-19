import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import AuthContext from './context'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie';
import Header from './components/Header';

const App = () => {

  const [Auth, setAuth] = useState(jwt.decode(Cookies.get('token')));

  return (
      <AuthContext.Provider value={{
        Auth,
        setAuth
      }}>
        <BrowserRouter>
          <Header/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;
