import Index from './pages/Index/Index'
import {SignIn, SignUp} from './pages/Auth/Auth'
import Basket from './pages/Basket/Basket'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'
import Admin from './pages/Admin/Admin'

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