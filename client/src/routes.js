import Index from './pages/Index'
import {SignIn, SignUp} from './pages/Auth'
import Basket from './pages/Basket'
import Device from './pages/Device'
import Admin from './pages/Admin'

export const adminRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const authRoutes = [
    {
        path: '/basket',
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Index
    },
    {
        path: '/login',
        Component: SignIn
    },
    {
        path: '/register',
        Component: SignUp
    },
    {
        path: '/device/:id',
        Component: Device
    },
]