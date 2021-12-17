import React, {useContext} from 'react'
import AuthContext from '../context'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {

    const {Auth} = useContext(AuthContext)

    return ( 
        <header>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                  StoreApp
                </Typography>
                <IconButton>
                    <ShoppingCartOutlinedIcon>

                    </ShoppingCartOutlinedIcon>
                </IconButton>
              </Toolbar>
            </AppBar>

        </header>
    );
};

export default NavBar;