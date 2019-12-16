import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
import routes from '../src/App'
import { getServerStore } from '../src/store/store'
import { Provider } from 'react-redux'
import Header from '../src/component/Header'

const store = getServerStore()

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    // 获取根据路由渲染出的组件，并且拿到loadData方法，获取数据

    // 存储网络请求
    const promises = []
    routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            const { loadData } = route.component
            if (loadData) {
                promises.push(loadData(store))
            }
        }
    })
    // 等待所有网络请求结束再渲染
    Promise.race(promises).then(() => {
        // 把react组件解析成html
        const Page = <Provider store={store}>
            <StaticRouter location={req.url}>
                <Header></Header>
                {routes.map(route => <Route {...route}></Route>)}
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
                <script>
                    window.__context = ${JSON.stringify(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
            </html>
        `)
    })
    .catch(()=>{
        res.send('报错了')
    })
})

app.listen(9521, () => {
    console.log('监听完毕！')
})