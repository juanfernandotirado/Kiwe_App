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
const assignRestDb = (context,payload) => {
    context.commit('SELECT_REST_DB');
}
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


export default{
    changeName,
    getUserStatus,
    addGroupSize,
    subtractGroupSize,
    assignRestDb,
    assignRest,
    joinList,
    addWaitingList,
    updateGalleryImgs
} 