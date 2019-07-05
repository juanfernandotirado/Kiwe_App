
// Action change user's nickname

const changeName = (context,payload) => {
    context.commit('UPDATE_USER_NICKNAME',payload);
  };

// Action get user information

const getUserStatus = (context,payload) => {
    context.commit('GET_USER_STATUS',payload);
};

// Action to add people to the group

const addGroupSize = (context) => {
    context.commit('ADD_GROUP_SIZE');
};

// Action to subtract people from the group

const subtractGroupSize = (context) => {
    context.commit('SUBTRACT_GROUP_SIZE');
};

// Action select restaurant from database

const assignRestDb = (context,payload) => {
    context.commit('SELECT_REST_DB',payload);
};

// Action empty restaurant list array

const emptyRestDb = (context) => {
    context.commit('EMPTY_REST_DB');
};

// Action add information to selected restaurant

const assignRest = (context,payload) => {
    context.commit('SELECT_RESTAURANT',payload);
};

// Action add information to currentList store variable

const addWaitingList = (context,payload) => {
    context.commit('ADD_TO_WAITING_LIST', payload);
};

// Action join list in waitlist store variable

const joinList = (context,payload) => {
    context.commit('JOIN_LIST', payload);
}

// Action update menu gallery imgs

const updateGalleryImgs = (context,payload) => {
    context.commit('UPDATE_GALLERY_IMGS',payload);
}

// Action toggle log in and sign up

const signUpShows = (context) => {
    context.commit('TOOGLE_JOIN');
}

// Action toggle pop up confirmation

const popUpShows = (context) => {
    context.commit('TOGGLE_POPUP');
}

// Action toggle pop up drop off

const popUpShowsD = (context) => {
    context.commit('TOGGLE_POPUP_DROP');
}

// Action toggle isInLine

const isInLine = (context) => {
    context.commit('TOGGLE_ISINLINE');
}

// Action empty waitlist array

const emptyWaitlist = (context) => {
    context.commit('EMPTY_WAITLIST');
}

// Action empty currentListStatus object

const emptyStatus = (context) => {
    context.commit('EMPTY_STATUS');
}

// Action profile Update Nickname

const updateNickname = (context, payload) => {
    context.commit('UPDATE_NICKNAME', payload);
}

// Action profile Update Phone Number

const updatePhoneNumber = (context, payload) => {
    context.commit('UPDATE_PHONENUMBER', payload);
}

// Action profile Update Profile

const updateProfile = (context,payload) => {
    context.commit('UPDATE_PROFILE', payload);
}


// Action update current spot

const updateSpot = (context,payload) => {
    context.commit('UPDATE_CURRENT_SPOT',payload);
}

// Action set current spot in selected restaurant

const rUpdateSpot = (context, payload) => {
    context.commit('REST_CURRENT_SPOT', payload);
}

// Action toggle success pop up confirmation

const togglePopUpSuccessShows = (context) => {
    context.commit('TOGGLE_POPUP_SUCCESS');
}

// Action control loader restaurant list
const controlLoading = (context,payload) => {
    context.commit('CONTROL_LOADING',payload);
}

// Action control notification
const controlPopupNotification = (context,payload) => {
    context.commit('CONTROL_POPUP_NOTIFICATION',payload);
}

// Action deny notification
const denyPopupNotification = (context,payload) => {
    context.commit('DENY_POPUP_NOTIFICATION',payload);
}

// Action check if user is in Home page
const toogleHome = (context) => {
    context.commit('TOGGLE_HOME');
}

export default{
    changeName,
    getUserStatus,
    addGroupSize,
    subtractGroupSize,
    assignRestDb,
    emptyRestDb,
    assignRest,
    joinList,
    addWaitingList,
    updateGalleryImgs,
    signUpShows,
    popUpShows,
    popUpShowsD,
    isInLine,
    emptyWaitlist,
    emptyStatus,
    updateNickname,
    updatePhoneNumber,
    updateProfile,
    updateSpot,
    rUpdateSpot,
    togglePopUpSuccessShows,
    controlLoading,
    controlPopupNotification,
    denyPopupNotification,
    toogleHome

} 