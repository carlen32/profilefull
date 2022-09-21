import axios from 'axios';
import { tokenConfig } from '../redux/actions/auth/tokenActions';
const baseUrl = "http://localhost:4000";

  export const APIget = {
    getPhotos: async function(dispatch, getState) {
      const config = (tokenConfig(getState))
      return axios.get(baseUrl + '/buy/photos', config)
    },
     getUser: async function(dispatch, getState) {
      const config = (tokenConfig(getState))
      // console.log(config)
      return await axios.get(baseUrl + '/secure/getUser', config)
    },
    getBought: async function(dispatch, getState) {
      const config = (tokenConfig(getState))
      return axios.get(baseUrl + '/buy/bought', config)
    },
  }


  export const APIpost = {
    registerUser: async function (body){
      return axios.post(baseUrl + '/user/register', body)
    },
    loginUser: async function (body){
      return axios.post(baseUrl + '/user/login', body)
    },
    buyImage: async function (body, dispatch, getState){
      console.log('api part ')
      const config = (tokenConfig(getState))
      return axios.post(baseUrl + '/buy/buyImg', body, config)
    }
  }


