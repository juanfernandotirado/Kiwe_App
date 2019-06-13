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
    state.currentListStatus.groupSize +=1;
    console.log(state.currentListStatus.groupSize);
}

//// Function to subtract people from the group
const SUBTRACT_GROUP_SIZE = (state) => {
    state.currentListStatus.groupSize -=1;
    console.log(state.currentListStatus.groupSize);
}

//payload is receiving a parameter
const SELECT_RESTAURANT = (state,payload) =>{
    // const newSel = Object.assign(state.selRest, payload);
    state.selRest = payload;
    // console.log(newSel);
}

const ADD_TO_WAITING_LIST = (state, payload) => {
    state.currentListStatus = payload;
}


const JOIN_LIST = (state,payload) => {
    state.waitList.push(payload);
    state.currentListStatus.currentSpot++;
    state.currentListStatus.joinTime=new Date();
    console.log(state.waitList);
}

//Update menu gallery imgs
const UPDATE_GALLERY_IMGS = (state,payload) => {
    state.restaurantImgs = payload;
}

export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    ADD_GROUP_SIZE,
    SUBTRACT_GROUP_SIZE,
    SELECT_RESTAURANT,
    JOIN_LIST,
    ADD_TO_WAITING_LIST,
    UPDATE_GALLERY_IMGS

}