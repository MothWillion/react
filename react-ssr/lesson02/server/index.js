import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import App from '../src/App'
import store from '../src/store/store'
import { Provider } from 'react-redux'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    // 把react组件解析成html
    const Page = <Provider store={store}>
        <StaticRouter location={req.url}>
            <App></App>
        </StaticRouter>
    </Provider>
    const content = renderToString(Page)
    // 字符串模板
    res.send(`
        <html>
        <head>
            <meta charset="UTF-8">
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `)
})

app.listen(9521, () => {
    console.log('监听完毕！')
})