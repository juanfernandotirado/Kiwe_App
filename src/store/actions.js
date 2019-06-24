const changeName = (context,payload) => {
    context.commit('UPDATE_USER_NICKNAME',payload);
  };

const getUserStatus = (context,payload) => {
    context.commit('GET_USER_STATUS',payload);
};

const addGroupSize = (context) => {
    context.commit('ADD_GROUP_SIZE');
};

const subtractGroupSize = (context) => {
    context.commit('SUBTRACT_GROUP_SIZE');
};

const assignRest = (context,payload) => {
    context.commit('SELECT_RESTAURANT',payload);
};

const addWaitingList = (context,payload) => {
    context.commit('ADD_WAITING_LIST', payload);
}

//its like the state in mutation
const joinList = (context,payload) => {
    context.commit('JOIN_LIST', payload);
}

//Update MenuGallery Imgs
const updateGalleryImgs = (context,payload) => {
    context.commit('UPDATE_GALLERY_IMGS',payload);
}


//Toggle pop up confirmation

const popUpShows = (context) => {
    context.commit('TOGGLE_POPUP');
}

//Toggle isInLine

const isInLine = (context) => {
    context.commit('TOGGLE_ISINLINE');
}

//Profile Update Nickname
const updateNickname = (context) => {
    context.commit('UPDATE_NICKNAME');
}

//Profile Update Phone Number
const updatePhoneNumber = (context) => {
    context.commit('UPDATE_PHONENUMBER');
}

//Profile Update Profile
const updateProfile = (context) => {
    context.commit('UPDATE_PROFILE');
}



export default{
    changeName,
    getUserStatus,
    addGroupSize,
    subtractGroupSize,
    assignRest,
    joinList,
    addWaitingList,
    updateGalleryImgs,
    popUpShows,
    isInLine,
    updateNickname,
    updatePhoneNumber,
    updateProfile

} 