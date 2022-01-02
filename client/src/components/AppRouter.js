import React, {useContext} from 'react'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/Error/NotFound'
import AuthContext from '../context'


const AppRouter = () => {
    
    const {Auth} = useContext(AuthContext)

    return (
        <Routes>
            {Auth && Auth.role === 'ADMIN' && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component()}/>
            )}
            {Auth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component()}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component()}/>
            )}
            <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
    );
};

export default AppRouter;