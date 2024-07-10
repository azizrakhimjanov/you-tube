import axios from "axios";

const BASE_URI =  'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '48c7e866eemshcc82a0659c2fd04p1a001ejsn241de266aaed',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
  };


  export const ApiService ={
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options) 
        return response.data
     },
  }