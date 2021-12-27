import Index from './pages/Index'
import {SignIn, SignUp} from './pages/Auth'
import Basket from './pages/Basket'
import Product from './pages/Product'
import Products from './pages/Products'
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
        path: '/products',
        Component: Products
    },
    {
        path: '/product/:id',
        Component: Product
    },
]