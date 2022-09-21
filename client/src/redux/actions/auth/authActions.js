
import { APIget, APIpost } from "../../../utils/API";
import { REGISTER_SUCCESS, LOGOUT, ERROR, LOGIN_SUCCESS, GET_USER } from "../types";


export const register = (body) => async dispatch => {
  try {
    // console.log(body)
    APIpost.registerUser(body)
      .then(async (res) => {
        const token = res.data.token;
        // console.log(token)
        if(token) {
           await dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data 
          
        })
        } else {
           await dispatch({
               type: ERROR,
               payload: res.data
             })
        }
      })
  } catch (err) {
    console.log(err.message);

  }
}


export const login = (body) => async dispatch => {
  try {
    // console.log(body)
    APIpost.loginUser(body)
      .then(async (res) => {
        const token = res.data.token;
        // console.log(token)
        if(token) {
           await dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data 
          
        })
        } else {
           await dispatch({
               type: ERROR,
               payload: res.data
             })
        }
      })
  } catch (err) {
    console.log(err.message);

  }
}



export const getUserNoLoading = () => async (dispatch, getState) => {
 
  try {
    APIget.getUser(dispatch,getState)
    .then(async (res) => {
      if(res) {
         await dispatch({
        type: GET_USER,
        payload: res.data.user 
        
      })
      } else {
         await dispatch({
             type: ERROR,
             payload: res.data
           })
      }
    })
  } catch (err) {
    console.error(err.message);
  }
  };

  
// Logout User
export const logout = () => {
  return {
    type: LOGOUT
  };
};



    //  console.log(body)
    //     const response = await fetch("http://localhost:5000/auth/register", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(body),
    //     });
    //     const parseRes = await response.json();
    //       console.log(parseRes);
    //       const token = parseRes.token

    //       if(token) {
    //        await dispatch({
    //         type: REGISTER_SUCCESS,
    //         payload: parseRes,
    //      })} else {
    //        await dispatch({
    //          type: ERROR,
    //          payload: parseRes
    //        })
    //      }