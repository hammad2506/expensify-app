import { firebase, providerForGoogle } from '../firebase/firebase';

export const loginUser = (id) => ({
    type: 'LOGIN_USER',
    id 
})

export const startLoginUser = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(providerForGoogle);
    }
}

export const logoutUser = (id) => ({
    type: 'LOGOUT_USER'
})

export const startLogoutUser = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    }
}

