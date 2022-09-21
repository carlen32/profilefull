import { combineReducers } from 'redux';
import  {imgVidReducer}  from './imgVidReducer';
import {errorReducer} from './errorReducer';
import { authReducer } from './authReducer';

//////// all reducers //////////////
export default combineReducers({
    imgVidReducer,
    errorReducer,
    authReducer
})