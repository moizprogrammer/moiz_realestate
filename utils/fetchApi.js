import axios from "axios";
export const baseUrl ='https://bayut.p.rapidapi.com'


export const fetchApi=async (url) =>{
    const {data}=await axios.get((url),{
 headers: {
    'X-RapidAPI-Key': '32f32caba8msh2dbdb4dafce6d78p1a7f55jsn6b416b9be456',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  } 
    })
    return data;
}