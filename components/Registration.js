import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../constants/colors";
import * as http from "../util/http";
import {useState} from "react";

function Registration({navigation}){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    function usernameChangeHandler(value){
        setUsername(value)
    }

    function emailChangeHandler(value){
        setEmail(value)
    }

    function passwordChangeHandler(value){
        setPassword(value)
    }

    async function registrationHandler(){
        const response = await http.registerUser(username, email, password);
        alert(response.message)
    }

    function cancelRegistrationHandler(){
        navigation.navigate('Login')
    }

    return <View style={styles.container}>
        <View style={styles.registration_message_container}>
            <Text style={styles.registration_message}>Create new account</Text>
        </View>

        <View style={styles.username_container}>
            <View>
                <Text style={styles.username_text}>Username</Text>
            </View>
            <View>
                <TextInput style={styles.username} onChangeText={usernameChangeHandler}/>
            </View>
        </View>

        <View style={styles.email_container}>
            <View>
                <Text style={styles.email_text}>Email</Text>
            </View>
            <View>
                <TextInput style={styles.email} onChangeText={emailChangeHandler} />
            </View>
        </View>

        <View style={styles.password_container}>
            <View>
                <Text style={styles.password_text}>Password</Text>
            </View>
            <View>
                <TextInput style={styles.password}  onChangeText={passwordChangeHandler} />
            </View>
        </View>

        <View style={styles.button_container}>
            <View style={styles.register_button}>
                <Button color={Colors.light} title={"Register"} onPress={registrationHandler} />
            </View>
            <View style={styles.cancel_button}>
                <Button color={Colors.light_dark} title={"Cancel"} onPress={cancelRegistrationHandler}/>
            </View>
        </View>
    </View>
}

export default Registration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: '15%'
    },
    registration_message_container:{
        borderBottomWidth: 5,
        borderColor: Colors.light,
        width: '80%',
        marginBottom: 40
    },
    registration_message:{
        color: Colors.light,
        fontWeight: "bold",
        fontSize: 25,
        textAlign:'center'
    },
    username_container: {
        width: '80%',
    },
    username_text: {
        color: Colors.light,
        fontWeight: "bold"
    },
    username: {
        fontSize: 20,
        borderColor: Colors.hard_dark,
        color: Colors.light,
        paddingHorizontal: 5,
        borderWidth: 2,
        width: '100%',
        borderRadius: 5,
        marginBottom: 5,
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
    cancel_button: {
        width: "30%",
        marginHorizontal: 2
    },
    register_button: {
        width: "70%",
        marginHorizontal: 2,
        color: Colors.light
    }
});