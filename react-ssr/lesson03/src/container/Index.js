import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'

function Index(props) {
    const [count, setCount] = useState(1)
    useEffect(() => {
        // 如果是从其他页面访问首页，就从客户端获取
        if(props.list.length === 0){
            props.getIndexList()
        }
    }, [])
    return (
        <div>
            <h1>hello {props.title}!{count}</h1>
            <button onClick={() => setCount(count + 1)}>累加</button>
            <hr />
            <ul>
                {
                    props.list.map((item) =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}
export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(Index)