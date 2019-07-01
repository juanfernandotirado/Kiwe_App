import { Object } from "core-js";

// Function change user's nickname

const UPDATE_USER_NICKNAME = (state,payload) =>{
    state.userStatus.nickName = payload;
}

// Function get user information

const GET_USER_STATUS = (state,payload) => {
    state.userStatus = payload;
    console.log(state.userStatus);
}

// Function to add people to the group

const ADD_GROUP_SIZE = (state) => {
    state.currentListStatus.grSize +=1;
    console.log(state.currentListStatus.grSize);
}

// Function to subtract people from the group

const SUBTRACT_GROUP_SIZE = (state) => {
    state.currentListStatus.grSize -=1;
    console.log(state.currentListStatus.grSize);
}

// Function select restaurant from database

const SELECT_REST_DB = (state,payload) => {
    state.restaurantList.push(payload);
}

// Function empty restaurant list array

const EMPTY_REST_DB = (state) => {
    state.restaurantList=[];
}

// Function add information to selected restaurant

const SELECT_RESTAURANT = (state,payload) =>{
    state.selRest = payload;
    state.currentListStatus.rName = state.selRest.rName;
    state.currentListStatus.rid = state.selRest.rid;
    state.currentListStatus.estTime = state.selRest.estTime;
}

// Function add information to currentList store variable

const ADD_TO_WAITING_LIST = (state, payload) => {
    state.currentListStatus = payload;
}

// Function join list in waitlist store variable

const JOIN_LIST = (state,payload) => {
    state.waitList.push(payload);
    state.currentListStatus.joinTime=new Date();

}

// Function update menu gallery imgs

const UPDATE_GALLERY_IMGS = (state,payload) => {
    state.restaurantImgs = payload;
}

// Function toggle pop up confirmation

const TOGGLE_POPUP = (state) => {
    state.popUpShow = !state.popUpShow;
}

// Function toggle pop up drop off

const TOGGLE_POPUP_DROP = (state) => {
    state.popUpShowD = !state.popUpShowD;
}

// Function toggle isInLine

const TOGGLE_ISINLINE = (state) => {
    state.userStatus.isInLine = !state.userStatus.isInLine;
}

// Function empty waitlist array

const EMPTY_WAITLIST = (state) => {
    state.waitList = [];
}

// Function empty currentListStatus object

const EMPTY_STATUS = (state) => {
    state.currentListStatus.estTime = 0;
    state.currentListStatus.currentSpot = 0;
    state.currentListStatus.rName = '';
    state.currentListStatus.rid = '';
    state.currentListStatus.grSize = 1;
    state.currentListStatus.uName = '';
    state.currentListStatus.uid = '';
    state.currentListStatus.did = '';
    state.currentListStatus.status = '';
}

// Function profile Update Nickname

const UPDATE_NICKNAME = (state,payload) => {
    state.userStatus.nickName = payload;
}

// Function profile Update Phone Number

const UPDATE_PHONENUMBER = (state,payload) => {
    state.userStatus.phone = payload;
}

// Function profile Update Profile

const UPDATE_PROFILE = (state,payload) => {
    state.userStatus.preferences = payload;
}

// Function update current spot

const UPDATE_CURRENT_SPOT = (state,payload) => {
    state.currentListStatus.currentSpot = payload;
}

// Function set current spot in selected restaurant

const REST_CURRENT_SPOT = (state,payload) => {
    state.selRest.spot = payload;
}

// Function toggle success pop up confirmation

const TOGGLE_POPUP_SUCCESS = (state) => {
    state.popUpSuccessShow = !state.popUpSuccessShow;
}

//Function toggle loader restaurant list

const TOGGLE_LOADING_REST = (state) => {
    state.loadedRestaurantList = !state.loadedRestaurantList;
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
    TOGGLE_ISINLINE,
    EMPTY_WAITLIST,
    EMPTY_STATUS,
    TOGGLE_ISINLINE,
    UPDATE_NICKNAME,
    UPDATE_PHONENUMBER,
    UPDATE_PROFILE,
    UPDATE_CURRENT_SPOT,
    REST_CURRENT_SPOT,
    TOGGLE_POPUP_SUCCESS,
    TOGGLE_LOADING_REST

}