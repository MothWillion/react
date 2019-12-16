import React from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'

function User(props) {
    console.log(props)
    return <h1>你好{props.userInfo.name},你是最棒的人{props.userInfo.best}</h1>
}
User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}
export default connect(
    state => {
        console.log(state)
        return { userInfo: state.user.data }
    },
    { getUserInfo }
)(User)