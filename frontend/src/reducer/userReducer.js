function userReducer(user, action) {
    console.log("userreducer");
    switch(action.type){
        case "SET_USER":{
            return action.payload;
        }
        case "UNSET_USER":{
            return null;
        }
        default: return user;
    }
}
export default userReducer;