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
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => {
                console.log(e);
            });
    }
}



