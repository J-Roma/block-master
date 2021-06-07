import { types } from '../types/Types';
import { firebase, googleAuthProvider } from "../firebase/config"
import { startLoading, finishLoading } from "../actions/ui"
import Swal from 'sweetalert2'

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

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(startLoading)
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                dispatch(finishLoading)
				return (
                    Swal.fire({
                        title: 'Error!',
                        text: e,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
            )
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                );
                console.log(user)
            })
            .catch(e => {
                console.log(e);

            })

    }
}

