import React, {useContext} from 'react'
import {useNavigate } from 'react-router-dom'
import AuthContext from '../context'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {

    const navigate = useNavigate()

    const {Auth} = useContext(AuthContext)

    return ( 
        <header>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                  StoreApp
                </Typography>
                {!Auth && 
                  <Button color="inherit" onClick={() => navigate('/login')}>Войти</Button>
                }
                {Auth && Auth.role !== 'ADMIN' &&
                  <IconButton color="inherit" onClick={() => navigate('/basket')}>
                      <ShoppingCartOutlinedIcon>

                      </ShoppingCartOutlinedIcon>
                  </IconButton>
                }
                {Auth && Auth.role === 'ADMIN' &&
                  <>
                    <Button color="inherit" onClick={() => navigate('/admin')}>Админ панель</Button>
                    <IconButton color="inherit" onClick={() => navigate('/basket')}>
                        <ShoppingCartOutlinedIcon>

                        </ShoppingCartOutlinedIcon>
                    </IconButton>
                  </>
                }
              </Toolbar>
            </AppBar>
        </header>
    );
};

export default NavBar;