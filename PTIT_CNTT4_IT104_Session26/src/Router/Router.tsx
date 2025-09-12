import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Account from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE05/Account'
import Login from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE05/Login'
import Product from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE01/Product'
import ProductDetail from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE01/ProductDetail'
import Student from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE02/Student'
import StudentDetail from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE02/StudentDetail'
import Studentt from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE03/Studentt'
import Student04 from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE04/Student04'
import PrivateRouter from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE05/PrivateRouter'
import Account06 from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE06/Account06'
import Login06 from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE06/Login06'
import Team from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE07/Team'
import Teams from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE07/Teams'
import TeamsIndex from '../components/PTIT_CNTT4_IT104_Session26_EXERCISE07/TeamsIndex'

export default function Router() {
    const router = createBrowserRouter([
        // EXERCISE01
        {
            path: "/product",
            element: <Product />
        },
        {
            path: "/product/:id",
            element: <ProductDetail />
        },
        // EXERCISE02
        {
            path: "/student",
            element: <Student />
        },
        {
            path: "/student/:name",
            element: <StudentDetail />
        },
        // EXERCISE03
        {
            path: "/studentt",
            element: <Studentt />
        },
        // EXERCISE04
        {
            path: "/student04",
            element: <Student04 />
        },
        //EXERCISE05
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/account",
            element: (
                <PrivateRouter>
                    <Account />
                </PrivateRouter>
            )
        },
        //EXERCISE06
        {
            path: "login06",
            element: <Login06></Login06>
        },
        {
            path: "account06",
            element: <Account06></Account06>
        },
        // EXERCISE07
        {
            path: "team",
            element: <Team></Team>
        },
        {
            path: "teams",
            element: <Teams></Teams>
        },
        {
            path: "team",
            element: <TeamsIndex></TeamsIndex>
        },
    ])  
    
    return <RouterProvider router={router} />
}