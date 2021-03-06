import {types} from '../types/Types'

const initialState = {
   uid:'',
   name: '',

} 

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
       case types.login:
           return {
               uid: action.payload.uid,
               name: action.payload.displayName
           }
       case types.logout:
           return initialState;

       default:
           return state;
   }
}