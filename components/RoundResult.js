import {Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {Colors} from "../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import {confirmResult} from "../util/http";
import {useContext} from "react";
import {UserContext} from "../store/user-context";

function RoundResult({navigation, route}){
    const [stats, setStats] = useState({})
    const userCtx = useContext(UserContext)

    useEffect(() => {
        setStats(route.params.results)
    }, []);

    async function confirmHandler(){
        const response = await confirmResult(userCtx.user.token, stats);
        navigation.navigate('Dashboard')
    }

    return <View style={styles.container}>
        <View style={styles.trophy_container}>
            <Ionicons name={'trophy'} size={200} color={Colors.light} />
        </View>
        <View style={styles.stats_container}>
            <Text style={styles.stats_text}>Points: { stats.points } </Text>
            <Text style={styles.stats_text}>Success: { (stats.correct_answers / stats.total_questions) * 100} %</Text>
            <Text style={styles.stats_text}>Wrong Answers: { stats.wrong_answers } </Text>
        </View>
        <Pressable style={styles.button_container} onPress={confirmHandler}>
            <View>
                <Text style={styles.button_text}>Confirm Result</Text>
            </View>
        </Pressable>
    </View>
}

export default RoundResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: 80
    },
    trophy_container:{
        marginBottom: 50
    },
    stats_container:{
        width:'90%',
        borderColor: Colors.hard_dark,
        borderWidth: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    stats_text:{
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button_container:{
        margin: 10,
        borderColor: Colors.light,
        borderWidth: 2,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: Colors.hard_dark
    },
    button_text:{
        color: Colors.light,
        fontWeight: 'bold'
    }
})