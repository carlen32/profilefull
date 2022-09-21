import {CLEAR_ERRORS, ERROR} from './types';


export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

export const returnErrors = (msg, status, id = null) => {
    return {
        type: ERROR,
        payload: { msg, status, id}
    };
};