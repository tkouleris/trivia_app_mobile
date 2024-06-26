import axios from 'axios'
import * as config from '../config'


export async function getToken(email, password){

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

export async function registerUser(username, email, password){

    const response = await axios.post(
        config.URL + '/signup',
        {
            username: username,
            email: email,
            password: password
        }
    ).catch((e) => {
        return {'data':{ 'message':e.response.data.message, 'status': e.response.data.status}};
    });
    return response.data
}

export async function fetchQuestions(token, category){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.get(config.URL + '/trivia?category='+category,headers).catch((error)=>console.log(error))
    return {'data': response.data}
}

export async function confirmResult(token, result){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.post(config.URL + '/submit', result, headers).catch((error)=>console.log(error))
    return {'data': response.data}
}

export async function fetchStats(token){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.get(config.URL + '/stats', headers).catch((error)=>console.log(error))
    return {'data': response.data}
}
