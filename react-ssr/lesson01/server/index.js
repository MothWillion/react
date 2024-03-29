import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    // 把react组件解析成html
    const content = renderToString(App)
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