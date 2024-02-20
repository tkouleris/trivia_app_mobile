import {View, Text, StyleSheet, Pressable} from "react-native";
import {useEffect, useLayoutEffect, useState} from "react";
import {Colors} from "../constants/colors";
import LoadingOverlay from "./UI/LoadingOverlay";

function Gameboard({route}){
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [totalPoints, setTotalPoints] = useState(0)

    useEffect(() => {
        setQuestions(route.params.questions)
    }, []);

    // function decode(string){
    //     let output = decodeURI(string).replace("%3F","?");
    //     output = output.replace("%3A", ":")
    //     return output.replace("%2C",",")
    // }

    function answerHandler(points){
        if(currentIndex < (questions.length - 1)){
            setCurrentIndex(currentIndex+1)
            setTotalPoints(totalPoints + points)
        }
        console.log("Total Points: " + totalPoints);
    }

    if(questions.length === 0){
        return <LoadingOverlay/>
    }

    return <View style={styles.container}>
        <Text style={styles.question_text}>{(currentIndex+1)}. { decodeURIComponent(questions[currentIndex].question)}</Text>
        <View style={styles.answers_container}>
            {questions[currentIndex].answers.map((q, key) => {
                return (
                    <Pressable onPress={answerHandler.bind(this,q.points)} style={styles.answer_container} key={key}>
                        <View >
                            <Text style={styles.answer_text}>{decodeURIComponent(q.answer)}</Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    </View>
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
    },
    answers_container:{
        width: '100%',
        marginTop: 20
    },
    answer_container:{
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: Colors.hard_dark,
        width: '100%',
        marginVertical: 10
    },
    answer_text:{
        textAlign: 'left',
        color: Colors.light,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20
    }
})