import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../constants/colors";
import * as http from "../util/http";
import {useState} from "react";

function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function emailInputHandler(emailValue){
        setEmail(emailValue)
    }

    function passwordInputHandler(passwordValue){
        setPassword(passwordValue)
    }

    async function handleLogin(){
        const response =  await http.getToken(email, password)
        if(response.status === 0){
            alert(response.message)
        }else{
            alert(response.data.token)
        }
    }

    function handleRegistrationNavigation() {
        navigation.navigate('Registration')
    }

    return  <View style={styles.container}>
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