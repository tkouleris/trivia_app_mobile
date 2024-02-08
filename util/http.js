import axios from 'axios'
import * as config from '../config'



export async function fetchData(){
    // const response = await axios.get(config.URL + '209098')
    const response = await axios.get(config.URL)

    console.log('test')
    console.log(response.data)
    return {'data': response.data}
}
