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

const SELECT_REST_DB = (state,payload) => {
    state.restaurantList.push(payload);
}

const EMPTY_REST_DB = (state) => {
    state.restaurantList=[];
}

//payload is receiving a parameter
const SELECT_RESTAURANT = (state,payload) =>{
    // const newSel = Object.assign(state.selRest, payload);
    state.selRest = payload;
    state.currentListStatus.rName = state.selRest.rName;
    state.currentListStatus.rid = state.selRest.rid;
    state.currentListStatus.estTime = state.selRest.estTime;
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

//Toggle pop up confirmation

const TOGGLE_POPUP = (state) => {
    state.popUpShow = !state.popUpShow;
}

const TOGGLE_POPUP_DROP = (state) => {
    state.popUpShowD = !state.popUpShowD;
}

//Toggle isInLine

const TOGGLE_ISINLINE = (state) => {
    state.userStatus.isInLine = !state.userStatus.isInLine;
}


export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    ADD_GROUP_SIZE,
    SUBTRACT_GROUP_SIZE,
    SELECT_REST_DB,
    EMPTY_REST_DB,
    SELECT_RESTAURANT,
    JOIN_LIST,
    ADD_TO_WAITING_LIST,
    UPDATE_GALLERY_IMGS,
    TOGGLE_POPUP,
    TOGGLE_POPUP_DROP,
    TOGGLE_ISINLINE

}