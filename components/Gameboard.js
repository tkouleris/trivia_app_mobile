import {View, Text, StyleSheet, Pressable} from "react-native";
import {useEffect, useLayoutEffect, useState} from "react";
import {Colors} from "../constants/colors";
import LoadingOverlay from "./UI/LoadingOverlay";

function Gameboard({navigation, route}){
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [roundStarts, setTotalPoints] = useState({
            "points": 0,
            "total_questions": 10,
            "wrong_answers":0,
            "correct_answers": 0,
            "difficulty": "mix"
    })

    useEffect(() => {
        setQuestions(route.params.questions)
    }, []);

    function answerHandler(points){
        console.log(currentIndex, questions.length-1)
        if(points > 0 && currentIndex <= (questions.length-1)){
            roundStarts.points = roundStarts.points + points
            roundStarts.correct_answers = roundStarts.correct_answers + 1
        }
        if(points === 0 && currentIndex <= (questions.length-1)){
            roundStarts.wrong_answers = roundStarts.wrong_answers + 1
        }
        if(currentIndex < (questions.length-1)){
            setCurrentIndex(currentIndex + 1)
        }
        if(currentIndex === questions.length-1){
            navigation.navigate('RoundResult', {results: roundStarts})
        }
    }

    if(questions.length === 0){
        return <LoadingOverlay/>
    }

    return <View style={styles.container}>
        <Text style={styles.question_text}>{(currentIndex+1)}. { decodeURIComponent(questions[currentIndex].question)}</Text>
        <View style={styles.answers_container}>
            {questions[currentIndex].answers.map((q, key) => {
                return (
                    <Pressable
                        onPress={answerHandler.bind(this,q.points)}
                        key={key}
                        style={({ pressed }) =>
                            pressed
                                ? [styles.answer_container, styles.pressed]
                                : styles.answer_container
                        }
                    >
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
    },
    pressed:{
        opacity: 0.75,
        backgroundColor: Colors.light_dark,
        borderRadius: 4
    }
})