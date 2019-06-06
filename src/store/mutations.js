const UPDATE_USER_NICKNAME = (state,payload) =>{
    state.userStatus.nickName = payload;
}

const GET_USER_STATUS = (state,payload) => {
    state.userStatus = payload;
    console.log(state.userStatus);
}

// Function to add people to the group
const ADD_GROUP_SIZE = (state) => {
    state.groupSize +=1;
    console.log(state.groupSize);
}

//// Function to substract people from the group
const SUBSTRACT_GROUP_SIZE = (state) => {
    state.groupSize--;
    console.log(state.groupSize);
}

export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    ADD_GROUP_SIZE,
    SUBSTRACT_GROUP_SIZE
}