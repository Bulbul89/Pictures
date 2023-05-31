import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {

    headers : {
        Authorization: 'Client-ID RKOm1UWvu9dJ_1IO2rSj3jOHWpY4rZmTkY1vspYjcPg'
    },
    params : {
        query : term 
    }

    })
   
    return response.data.results;
}

export default searchImages;