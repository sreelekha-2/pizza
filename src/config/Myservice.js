import { APIURL } from "./URL";

import { USERURL } from "./URL";

import axios from "axios"

function getProducts(){
    return axios.get(APIURL)
}

function getProductById(id){
    return axios.get(`${APIURL}${id}`)
}

function getUsers(){
    return axios.get(USERURL)
}

function addUserDetails(data){
    return axios.post(USERURL,data)
}

export {getProducts,getProductById,addUserDetails,getUsers}