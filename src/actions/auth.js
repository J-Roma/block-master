import { types } from '../types/Types';
import { firebase, googleAuthProvider } from "../firebase/config"
import { startLoading, finishLoading } from "../actions/ui"
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

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
                Toast.fire({
                    icon: 'success',
                    title: '¡Inicio de Sesion exitoso!'
                  })
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
                Toast.fire({
                    icon: 'success',
                    title: '¡Inicio de Sesion exitoso!'
                  })
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
                Toast.fire({
                    icon: 'success',
                    title: '¡Inicio de Sesion exitoso!'
                  })
            })
            .catch(e => {
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

