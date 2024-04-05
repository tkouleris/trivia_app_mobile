import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import UserContextProvider from "./store/user-context";
import React, {useContext} from "react";
import {saveUser} from "./util/database";
import Gameboard from "./components/Gameboard";
import RoundResult from "./components/RoundResult";
import IconButton from "./components/UI/IconButton";
import {DevSettings, View, Text} from "react-native";
import {Colors} from "./constants/colors";
import {UserContext} from "./store/user-context";
import RNRestart from 'react-native-restart';

const Stack = createNativeStackNavigator();

export default function App() {
    const userCtx = useContext(UserContext)
    function logoutHandler(navigation){
        saveUser("", "", "").then(r  =>{
            userCtx.setUser({
                token: "",
                username:""
            })
            navigation.navigate('Login')
        })
    }

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
                        options={ ({navigation}) => ({
                            headerStyle:{ backgroundColor: Colors.dark },
                            title: '',
                            headerShown: true,
                            headerLeft: () =>(<View></View>),
                            headerRight: ({tintColor}) => (
                                <IconButton
                                    icon="power"
                                    size={24}
                                    color={Colors.light}
                                    onPress={logoutHandler.bind(this, navigation)}
                                />
                            )
                        })}/>
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

