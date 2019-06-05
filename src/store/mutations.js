const UPDATE_USER_NICKNAME = (state,payload) =>{
    state.nickName = payload;
}

const GET_USER_STATUS = (state,payload) => {
    state.userStatus = payload;
    console.log(state.userStatus);
}

export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS
}