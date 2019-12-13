import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'
import store from '../src/store/store'
import { Provider } from 'react-redux'

const Page = <Provider store={store}>
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
</Provider>
// 注水
ReactDom.hydrate(Page, document.getElementById('root'))