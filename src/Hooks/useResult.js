import {useState, useEffect} from 'react'
import zomato from '../api/zomato'

export default () => {
    
    const [results, setResults] = useState([])
    const [errMessage, seterrMessage] = useState('');
    const searchApi = async (searchTerm) => {
    
        try {
            seterrMessage('')
            //console.log({errMessage})
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
            
      
        setResults(response.data.restaurants);
            } catch (err) {
                seterrMessage('Something went wrong')
                
                {results.length = 0}
        } 

     }
    
     const initialval = 'Pasta'

    useEffect (() => {
        searchApi(initialval)
      }, [])

      return [searchApi, results, errMessage, initialval];
}