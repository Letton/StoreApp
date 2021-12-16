import Index from './pages/Index'
import Auth from './pages/Auth'
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
        Component: Auth
    },
    {
        path: '/register',
        Component: Auth
    },
    {
        path: '/device/:id',
        Component: Device
    },
]