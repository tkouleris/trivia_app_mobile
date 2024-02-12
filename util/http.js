import axios from 'axios'
import * as config from '../config'


export async function getToken(email, password){
    let error;
    const response = await axios.post(
        config.URL + '/login',
        {
            email: email,
            password: password
        }
    ).catch((e) => e.toJSON());

    if(response.status !== 200){
        return {'status':0, 'message': "Wrong Credentials"}
    }

    return {'status':1, 'data': response.data}
}

export async function fetchData(){
    const response = await axios.get(config.URL )

    console.log('test')
    console.log(response.data)
    return {'data': response.data}
}
