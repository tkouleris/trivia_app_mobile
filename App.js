import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';
import Login from "./components/Login";
import Registration from "./components/Registration";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

