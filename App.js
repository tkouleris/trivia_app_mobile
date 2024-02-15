import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import UserContextProvider from "./store/user-context";

const Stack = createNativeStackNavigator();

export default function App() {

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
                </Stack.Navigator>
            </NavigationContainer>
        </UserContextProvider>
    )
}

