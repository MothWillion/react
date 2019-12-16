// 存储数据的入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})

// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

export const getClientStore = () => {
    const defaultState = window.__context ? window.__context : {}
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}

export const getServerStore = () => {
    // 服务端用的
    return createStore(reducer, applyMiddleware(thunk))
}