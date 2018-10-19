const AuthReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
                user: action.id
            };
        case 'LOGOUT_USER':
            return {};
        default: 
            return state;
    }
}

export default AuthReducer;