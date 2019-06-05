const changeName = (context,payload) => {
    context.commit('UPDATE_USER_NICKNAME',payload);
  };

const getUserStatus = (context,payload) => {
    context.commit('GET_USER_STATUS',payload);
}

export default{
    changeName,
    getUserStatus
} 