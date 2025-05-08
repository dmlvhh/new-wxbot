import {createBrowserRouter} from 'react-router-dom'
import Index from "@/pages/index/index.tsx"
import Message from "@/pages/message/index.tsx"
import Friend from "@/pages/friend/index.tsx"
import Apps from "@/pages/apps/index.tsx"
import Models from "@/pages/model/index.tsx"
import MainLayout from "@/layout/index.tsx";
import Login from "@/pages/login/index"
import Empty from "@/pages/empty/index"


const router = createBrowserRouter([
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    {
        path: '/',
        element: <MainLayout/>,
        // element: <Login/>,
        children: [
            {
                path: '/',
                element: <Empty/>,
            },
            {
                path: 'pc_detail/:md5',
                element: <Index/>,
            },
            {
                path: 'message',
                element: <Message/>,
            },
            {
                path: 'friend',
                element: <Friend/>,
            },
            {
                path: 'models',
                element: <Models/>,
            },
            {
                path: 'apps',
                element: <Apps/>,
            },
        ],
    },

])

export default router