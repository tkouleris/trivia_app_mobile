import {createContext, useReducer} from "react";

export const UserContext = createContext({
    user:{},
    setUser: ({token}) =>{},
    deleteUser:()=>{},
    updateUser:({token})=>{}
});

function userReducer(state, action){
    switch (action.type){
        case 'SET':
            return action.payload;
        case 'UPDATE':
            return action.payload
        case 'DELETE':
            return {}
        default:
            return state;
    }
}


function UserContextProvider({children}){

    const [userState, dispatch] = useReducer(userReducer, {})

    function setUser(userData){
        dispatch({type:'SET', payload: userData})
    }

    function deleteUser(){
        dispatch({type:'DELETE'})
    }

    function updateUser(id, expenseData){
        dispatch({type:'UPDATE', payload: userData})
    }

    const value = {
        user: userState,
        setUser: setUser,
        deleteUser: deleteUser,
        updateUser: updateUser
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider