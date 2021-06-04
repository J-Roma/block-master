import { types } from '../types/Types';
import { firebase, googleAuthProvider } from "../firebase/config"

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    },
})

export const logout = () => ({
        type: types.logout,
})

export const startGoogleAuth = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })

    }
}

export const startGoogleLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch(logout());

    }
}


