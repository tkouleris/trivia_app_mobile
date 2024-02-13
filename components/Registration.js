import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../constants/colors";

function Registration(){
    return <View style={styles.container}>

        <View style={styles.username_container}>
            <View>
                <Text style={styles.username_text}>Username</Text>
            </View>
            <View>
                <TextInput style={styles.username} />
            </View>
        </View>

        <View style={styles.email_container}>
            <View>
                <Text style={styles.email_text}>Email</Text>
            </View>
            <View>
                <TextInput style={styles.email} />
            </View>
        </View>

        <View style={styles.password_container}>
            <View>
                <Text style={styles.password_text}>Password</Text>
            </View>
            <View>
                <TextInput secureTextEntry={true} style={styles.password} />
            </View>
        </View>

        <View style={styles.button_container}>
            <View style={styles.register_button}>
                <Button color={Colors.light} title={"Register"} />
            </View>
            <View style={styles.cancel_button}>
                <Button color={Colors.light_dark} title={"Cancel"}/>
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
        justifyContent: 'center'
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