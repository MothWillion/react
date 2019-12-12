// 模拟接口
const express = require('express')
const app = express()

app.get('/api/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code: 0,
        list: [
            {name: 'javascript', id: 1},
            {name: 'java', id: 2},
            {name: 'php', id: 3},
            {name: 'python', id: 4}
        ]
    })
})

app.listen(9090, () => {
    console.log('mock启动完毕')
})