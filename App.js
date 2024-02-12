import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import * as http from "./util/http";
import {Colors} from "./constants/colors";
import {getToken} from "./util/http";

export default function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // useEffect(() => {
    //   getData().then((d)=>console.log(d.data))
    // })

    function emailInputHandler(emailValue){
        setEmail(emailValue)
    }

    function passwordInputHandler(passwordValue){
        setPassword(passwordValue)
    }

    async function handleLogin(){
        const response =  await http.getToken(email, password)
        if(response.status === 0){
            console.log(response.message)
        }else{
            console.log(response.data.token)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.email_container}>
                <View>
                    <Text style={styles.email_text}>Email</Text>
                </View>
                <View>
                    <TextInput style={styles.email} onChangeText={emailInputHandler} />
                </View>
            </View>

            <View style={styles.password_container}>
                <View>
                    <Text style={styles.password_text}>Password</Text>
                </View>
                <View>
                    <TextInput secureTextEntry={true} style={styles.password}  onChangeText={passwordInputHandler} />
                </View>
            </View>

            <View style={styles.button_container}>
                <View style={styles.login_button}>
                    <Button color={Colors.light_dark} title={"Login"} onPress={handleLogin}/>
                </View>
                <View style={styles.register_button}>
                    <Button color={Colors.light} title={"Register"}/>
                </View>
            </View>
            <StatusBar style="light"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center'
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
