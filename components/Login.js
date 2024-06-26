import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../constants/colors";
import * as http from "../util/http";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../store/user-context";
import {getUser, init, saveUser} from "../util/database";
import {Ionicons} from "@expo/vector-icons";
import LoadingOverlay from "./UI/LoadingOverlay";

function Login({navigation}) {
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState({
        id: 1,
        email: "",
        password: "",
        token: ""
    })
    const userCtx = useContext(UserContext)

    useEffect(() => {
        async function getCurrentUser() {
            init()
            return await getUser();
        }

        getCurrentUser().then(user =>{
            if (user === undefined || user.email.length === 0 || user.password.length === 0) {
                setIsLoading(false);
            } else {
                http.getToken(user.email, user.password).then(response => {
                    setIsLoading(false);
                    if (response.status === 0) {
                        alert(response.message)
                    } else {
                        userCtx.setUser(response.data)
                        navigation.navigate('Dashboard')
                    }
                })
            }
        } );

    }, []);

    function emailInputHandler(emailValue) {
        setEmail(emailValue)
    }

    function passwordInputHandler(passwordValue) {
        setPassword(passwordValue)
    }

    async function handleLogin() {
        const response = await http.getToken(email, password)
        if (response.status === 0) {
            alert(response.message)
        } else {
            userCtx.setUser(response.data)
            saveUser(email, password, '')
            navigation.navigate('Dashboard')
        }
    }

    function handleRegistrationNavigation() {
        navigation.navigate('Registration')
    }

    if (isLoading) {
        return <LoadingOverlay/>
    }

    return <View style={styles.container}>
        <View>
            <Ionicons name={'help-circle-outline'} size={200} color={Colors.light}/>
        </View>
        <View>
            <Text style={styles.title_text}>Trivia App</Text>
        </View>
        <View style={styles.email_container}>
            <View>
                <Text style={styles.email_text}>Email</Text>
            </View>
            <View>
                <TextInput style={styles.email} onChangeText={emailInputHandler}/>
            </View>
        </View>

        <View style={styles.password_container}>
            <View>
                <Text style={styles.password_text}>Password</Text>
            </View>
            <View>
                <TextInput secureTextEntry={true} style={styles.password} onChangeText={passwordInputHandler}/>
            </View>
        </View>

        <View style={styles.button_container}>
            <View style={styles.login_button}>
                <Button color={Colors.light_dark} title={"Login"} onPress={handleLogin}/>
            </View>
            <View style={styles.register_button}>
                <Button color={Colors.light} title={"Register"} onPress={handleRegistrationNavigation}/>
            </View>
        </View>

    </View>
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: 80
    },
    title_text: {
        fontSize: 20,
        color: Colors.light,
        fontWeight: 'bold'
    },
    email_container: {
        width: '80%',
    },
    email_text: {
        color: Colors.light,
        fontWeight: "bold"
    },
    email: {
        fontSize: 20,
        borderColor: Colors.hard_dark,
        color: Colors.light,
        paddingHorizontal: 5,
        borderWidth: 2,
        width: '100%',
        borderRadius: 5,
        marginBottom: 5,
    },
    password_container: {
        width: '80%',
    },
    password_text: {
        color: Colors.light,
        fontWeight: "bold"
    },
    password: {
        fontSize: 20,
        borderColor: Colors.hard_dark,
        borderWidth: 2,
        width: '100%',
        borderRadius: 5,
        color: Colors.light,
        paddingHorizontal: 5,
    },
    button_container: {
        width: "80%",
        marginTop: 15,
        flexDirection: "row"
    },
    login_button: {
        width: "48%",
        marginHorizontal: 2
    },
    register_button: {
        width: "48%",
        marginHorizontal: 2,
        color: Colors.light
    }
});