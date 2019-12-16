import React from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'

// function App(){
//     return (
//         <div>
//             <Route path='/' exact component={Index}></Route>
//             <Route path='/about' exact component={About}></Route>
//         </div>
//     )
// }

// export default App

const routes = [
    {
        path: '/',
        component: Index,
        // loadData: Index.loadData,
        // exact: true,
        key: 'index'
    },
    {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path: '/user',
        component: User,
        exact: true,
        key: 'user'
    },
]

export default routes