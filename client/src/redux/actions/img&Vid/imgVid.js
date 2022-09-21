import { APIget, APIpost } from "../../../utils/API";
import { GRAB_PHOTOS, ERROR, BOUGHT_PHOTO, ALREADY_BOUGHT } from "../types";


export const grabPhotos = (body) => async (dispatch, getState) => {
  try {
    // console.log(body)
    APIget.getPhotos(dispatch, getState)
      .then(async (res) => {
        // console.log(res)
        if(res) {
           await dispatch({
          type: GRAB_PHOTOS,
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

export const buyImage = (body) => async (dispatch, getState) => {
  try {
    // console.log(body, 'actions img')
    APIpost.buyImage(body,dispatch,getState)
      .then(async (res) => {
        // console.log(res.data.msg)
        if(!res.data.msg) {
           await dispatch({
          type: BOUGHT_PHOTO,
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



export const boughtPhoto = (body) => async (dispatch, getState) => {
  try {
    // console.log(body, 'Bought')
    APIget.getBought(dispatch,getState)
      .then(async (res) => {
        // console.log(res.data.msg)
        if(!res.data.msg) {
           await dispatch({
          type: ALREADY_BOUGHT,
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
