import axios from 'axios'


export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': 'e2bcbd92a8ceec7309fe2170a5f55f0d'
    }

});