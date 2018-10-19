import { firebase, providerForGoogle } from '../firebase/firebase';

export const startLoginUser = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(providerForGoogle);
    }
}

export const startLogoutUser = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    }
}

