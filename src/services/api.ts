import axios from "axios";
import { LoginRequest } from "../interfaces/Auth";
import { SignupRequest } from "../interfaces/Auth";


export function token() {
    const token = localStorage.getItem('access_token');
    return {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };
  }
  


export async function signup(data:SignupRequest){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`,data)
    return response.data
} 

export async function login(data:LoginRequest){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`,data)
    return response
} 


export async function shortner(url:string,id:string){
    const data ={
        originalUrl:url,
        id:id
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/url/shorten-url`,data,token())
    return response
}

export async function redirect(shortUrl:string ){
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/url/${shortUrl}`,token());
    return response
}
