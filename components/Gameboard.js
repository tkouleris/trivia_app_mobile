import {View, Text, StyleSheet} from "react-native";
import {useEffect, useLayoutEffect, useState} from "react";
import {Colors} from "../constants/colors";

function Gameboard({route}){
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setQuestions(route.params.questions)

    }, []);

    function decode(string){
        return decodeURI(string).replace("%3F","?")
    }


    if(questions.length === 0){
        return <View>
            <Text>Gameboard</Text>
        </View>
    }else{
        return <View style={styles.container}>
            <Text style={styles.question_text}>{(currentIndex+1)}. { decode(questions[currentIndex].question)}</Text>
        </View>
    }



}

export default Gameboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: '15%',
        paddingHorizontal: '10%'
    },
    question_text:{
        textAlign: 'center',
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 22
    }
})