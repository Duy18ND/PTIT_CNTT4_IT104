import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EXERCISE01 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE01/EXERCISE01'
import Home from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE01/Home'
import About from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE01/About'
import Contact from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE01/Contact'
import EXERCISE02 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE02/EXERCISE02'
import Product from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE02/Product'
import ProductDetail from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE02/ProductDetail'
import EXERCISE03 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE03/EXERCISE03'
import Task from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE03/Task'
import TaskDetail from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE03/TaskDetail'
import Product04 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE04/Product04'
import BlogLayout from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE05/BlogLayout'
import Posts from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE05/Posts'
import PostDetail from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE05/PostDetail'
import Layout06 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Layout06'
import Home06 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Home06'
import Product06 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Product06'
import Detail06 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Detail06'
import Home07 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE07/Home07'
import About07 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE07/About07'
import NotFound07 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE07/NotFound07'
import Home08 from '../components/PTIT_CNTT4_IT104_Session27_EXERCISE08/Home08'


export default function Router() {
    const router = createBrowserRouter([
        // EXERCISE01
        {
            path: "/",
            element: <EXERCISE01></EXERCISE01>,
            children: [
                {
                    index: true,
                    element: <Home></Home>,
                },
                {
                    path: "about",
                    element: <About></About>,
                },
                {
                    path: "contact",
                    element: <Contact></Contact>,
                },
            ],
        },

        //EXERCISE02
        {
            path: "/",
            element: <EXERCISE02></EXERCISE02>,
            children: [
                {
                    path: "product",
                    element: <Product></Product>,
                },
                {
                    path: "product/:id",
                    element: <ProductDetail></ProductDetail>
                },
            ],
        },

        //EXERCISE03
        {
            path: "/",
            element: <EXERCISE03></EXERCISE03>,
            children: [
                {
                    path: "task",
                    element: <Task></Task>
                },
                {
                    path: "task/:id",
                    element: <TaskDetail></TaskDetail>
                }
            ]
        },

        //EXERCISE04
        {
            path: "/product04",
            element: <Product04></Product04>
        },
        //EXERCISE05
        {
            path: "/blog",
            element: <BlogLayout></BlogLayout>,
            children: [
                {
                    path: "posts",
                    element: <Posts></Posts>,
                },
                {
                    path: "posts/:id",
                    element: <PostDetail></PostDetail>,
                },
            ],
        },
        // EXERCISE06
        {
            path: "/",
            element: <Layout06 />,
            children: [
                { index: true, element: <Home06></Home06>},
                { path: "product", element: <Product06 /> },
                { path: "detail", element: <Detail06 /> },
            ],
        },
        //EXERCISE07
        {
            path: "/",
            element: <Home07></Home07>,
        },
        {
            path: "/about",
            element: <About07 />,
        },
        {
            path: "*",
            element: <NotFound07 />,
        },
    ])
    return (
        <div>
            <Home08></Home08>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}
