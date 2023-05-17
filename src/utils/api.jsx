import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '109c87e13amshace36405d36b0f5p1a0438jsnb8aabe24615f',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };