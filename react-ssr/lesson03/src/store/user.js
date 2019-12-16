// 首页逻辑
import axios from 'axios'
// actionType
const GET_LIST = 'INDEX/USER_INFO'

// actionCreater
const changeUserInfo = data => ({
    type: GET_LIST,
    data
})

export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:9090/api/user/info')
            .then(res => {
                const { data } = res.data
                console.log('用户信息1', data)
                dispatch(changeUserInfo(data))
            })
    }
}

const defaultState = {
    data: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                data: action.data
            }
            return newState
        default:
            return state
    }
}