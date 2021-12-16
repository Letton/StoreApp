import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import AuthContext from './context'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie';

const App = () => {

  const Auth = jwt.decode(Cookies.get('token'));

  return (
    <AuthContext.Provider value={Auth}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
