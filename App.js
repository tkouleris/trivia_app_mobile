import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import UserContextProvider from "./store/user-context";
import {useEffect} from "react";
import {getUser, init} from "./util/database";
import Gameboard from "./components/Gameboard";
import RoundResult from "./components/RoundResult";

const Stack = createNativeStackNavigator();

export default function App() {

    // useEffect(() => {
    //     init().then((user)=>{
    //         if(user.id===1){
    //             alert('user');
    //         }
    //     })
    //
    // }, [init]);

    return (
        <UserContextProvider>
            <NavigationContainer>
                <StatusBar style="light"/>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />

                    <Stack.Screen
                        name="Registration"
                        component={Registration}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                    />
                    <Stack.Screen
                        name="Gameboard"
                        component={Gameboard}
                    />
                    <Stack.Screen
                        name="RoundResult"
                        component={RoundResult}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContextProvider>
    )
}

