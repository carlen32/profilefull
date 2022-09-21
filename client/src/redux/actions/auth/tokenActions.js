
import {TOKEN_CHECK} from "../types";
import axios from 'axios';

export const tokenConfig = getState => {
    //Get token from localStorage
    // console.log(getState())
    const token = getState().authReducer.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
  // If token, add to headers
    if(token) {
        config.headers['token'] = token;
    }
    // console.log(config)
    return config;
};


export const isAuthFunction = () => async (dispatch, getState) => {
    // console.log(tokenConfig(getState))
    
      try {
          const res = await axios.get("http://localhost:4000/secure/verify", tokenConfig(getState));
          const parseRes = await res.data;
          console.log(parseRes)
          await dispatch({
              type: TOKEN_CHECK,
              payload: parseRes
           })
       
        } catch (err) {
          console.error(err.message)
        }
  }