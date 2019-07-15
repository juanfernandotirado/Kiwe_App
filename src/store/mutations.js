import { Object } from "core-js";

// Function change user's nickname

const UPDATE_USER_NICKNAME = (state,payload) =>{
    state.userStatus.nickName = payload;
}

// Function get user information

const GET_USER_STATUS = (state,payload) => {
    state.userStatus = payload;
    // console.log(state.userStatus);
}

// Function get waitlist information from database

const GET_WAITING_TO_CURRENTLIST = (state,payload) => {
    state.currentListStatus.currentSpot = payload.currentSpot;
    state.currentListStatus.date = payload.date;
    state.currentListStatus.grSize = payload.grSize;
    state.currentListStatus.joinTime = payload.joinTime;
    state.currentListStatus.joinHour = payload.joinHour;
    state.currentListStatus.rName = payload.rName;
    state.currentListStatus.did = payload.did;
    state.currentListStatus.status = payload.status;
    state.currentListStatus.rid = payload.rid;
    state.currentListStatus.joinAt = payload.joinAt;
    state.currentListStatus.rImgRef = payload.rImgRef;
}

// Function to add people to the group

const ADD_GROUP_SIZE = (state) => {
    state.currentListStatus.grSize +=1;
}

// Function to subtract people from the group

const SUBTRACT_GROUP_SIZE = (state) => {
    state.currentListStatus.grSize -=1;
}

// Function select restaurant from database

const SELECT_REST_DB = (state,payload) => {
    state.restaurantList.push(payload);
}

// Function empty restaurant list array

const EMPTY_REST_DB = (state) => {
    state.restaurantList=[];
}

// Function empty selected restaurant

const EMPTY_SEL_REST = (state) => {
    state.selRest = {};
}

// Function add information to selected restaurant

const SELECT_RESTAURANT = (state,payload) =>{
    state.selRest = payload;
    state.currentListStatus.rName = state.selRest.rName;
    state.currentListStatus.rid = state.selRest.rid;
    state.currentListStatus.estTime = state.selRest.estTime;
    state.currentListStatus.rRating = state.selRest.rating;
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

// Function toggle pop up drop off confirmation

const TOGGLE_POPUP_DROP_CONFIRM = (state) => {
    state.popUpDropConfirm = !state.popUpDropConfirm;
}

// Function toggle pop up drop off

const TOGGLE_POPUP_DROP_OFF = (state) => {
    state. popUpDropOff = !state. popUpDropOff;
}

// Function toggle isInLine

const TOGGLE_ISINLINE = (state,payload) => {
    state.userStatus.isInLine = payload;
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
    state.currentListStatus.rImgRef = '';
    state.currentListStatus.joinAt = '';
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

// Function toggle log in or sign up

const TOOGLE_JOIN = (state) => {
    state.joinMethod = !state.joinMethod;
}

// Function toggle success pop up confirmation

const TOGGLE_POPUP_SUCCESS = (state) => {
    state.popUpSuccessShow = !state.popUpSuccessShow;
}

//Function control loader restaurant list
const CONTROL_LOADING = (state,payload) => {
    state.loadedRestaurantList = payload;
}


// Function control notification pop up
const CONTROL_POPUP_NOTIFICATION = (state,payload) => {
    state.popUpNotificationShow = payload;
}

// Function deny notification pop up
const DENY_POPUP_NOTIFICATION = (state,payload) => {
    state.denyNotification = payload;
    state.popUpNotificationShow = false;
}

// Function check if user is in Home page

const TOGGLE_FIRST_STEP = (state) => {
    state.firstStep = !state.firstStep;
}

// Function add history to user profile

const ADD_HISTORY = (state,payload) => {
    state.userStatus.history.push(payload);
}

// Function change status to success

const CHANGE_STATUS = (state) => {
    state.currentListStatus.status = 'success';
}

// Function add waited time to currentListStatus

const ADD_WAITED_TIME = (state,payload) => {
    state.currentListStatus.waitedTime = payload;
}

// Function empty currentWaiting

const EMPTY_CURRENT_WAITING = (state) => {
    state.userStatus.currentWaiting = "";
}

const CHANGE_EST_TIME_ON_SINGLE_RESTAURANT = (state,payload) => {
    state.restaurantList[payload.index].estTime = payload.estTime
} 

// Function change waiting time for 5 minutes

const FIVE_MINUTE_WAIT = (state) => {
    state.popupFiveMinute = !state.popupFiveMinute;
}


//Function control active listen wait list
const CONTROL_LISTEN_LIST = (state,payload) => {
    state.isActiveListenWaitlist = payload;
}



export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    GET_WAITING_TO_CURRENTLIST,
    ADD_GROUP_SIZE,
    SUBTRACT_GROUP_SIZE,
    SELECT_REST_DB,
    EMPTY_REST_DB,
    EMPTY_SEL_REST,
    SELECT_RESTAURANT,
    JOIN_LIST,
    ADD_TO_WAITING_LIST,
    UPDATE_GALLERY_IMGS,
    TOOGLE_JOIN,
    TOGGLE_POPUP,
    TOGGLE_POPUP_DROP_CONFIRM,
    TOGGLE_POPUP_DROP_OFF,
    TOGGLE_ISINLINE,
    EMPTY_WAITLIST,
    EMPTY_STATUS,
    UPDATE_NICKNAME,
    UPDATE_PHONENUMBER,
    UPDATE_PROFILE,
    UPDATE_CURRENT_SPOT,
    REST_CURRENT_SPOT,
    TOGGLE_POPUP_SUCCESS,
    CONTROL_LOADING,
    CONTROL_POPUP_NOTIFICATION,
    DENY_POPUP_NOTIFICATION,
    TOGGLE_FIRST_STEP,
    ADD_HISTORY,
    CHANGE_STATUS,
    ADD_WAITED_TIME,
    EMPTY_CURRENT_WAITING,
    CHANGE_EST_TIME_ON_SINGLE_RESTAURANT,
    FIVE_MINUTE_WAIT,
    CONTROL_LISTEN_LIST

}