import { Object } from "core-js";

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

//// Function to subtract people from the group
const SUBTRACT_GROUP_SIZE = (state) => {
    state.groupSize -=1;
    console.log(state.groupSize);
}

const SELECT_RESTRAURANT = (state,payload) =>{
    const newSel = Object.assign(state.selRest, payload);
    console.log(newSel);
}

export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    ADD_GROUP_SIZE,
    SUBTRACT_GROUP_SIZE,
    SELECT_RESTRAURANT
}