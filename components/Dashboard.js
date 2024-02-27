import {View, Text, StyleSheet, Pressable} from "react-native";
import {Colors} from "../constants/colors";
import {UserContext} from "../store/user-context";
import {useContext} from "react";
import {fetchQuestions} from "../util/http";
import {Ionicons} from "@expo/vector-icons";

function Dashboard({navigation}){
    const userCtx = useContext(UserContext)

    function categorySelectionHandler(category){
        console.log(category);
        console.log(userCtx.user.token)
        fetchQuestions(userCtx.user.token, category).then((response)=>{
            navigation.navigate('Gameboard', {questions: response.data})
        })
    }

    return <View style={styles.container}>
        <View style={styles.title_container}>
            <Text style={styles.title_text}>Select Category</Text>
        </View>
        <View style={styles.buttons_container}>
            <Pressable
                onPress={categorySelectionHandler.bind(this,'film')}
                style={({ pressed }) =>
                    pressed
                        ? [styles.button, styles.pressed]
                        : styles.button
                }
            >
                <View style={styles.button_inner}>
                    <Ionicons name={'film'} size={20} color={Colors.light} />
                    <Text style={styles.button_text}>Film</Text>
                </View>
            </Pressable>
            <Pressable onPress={categorySelectionHandler.bind(this,'books')} style={styles.button}>
                <View style={styles.button_inner}>
                    <Ionicons name={'book'} size={20} color={Colors.light} />
                    <Text style={styles.button_text}>Books</Text>
                </View>
            </Pressable>
        </View>
        <View style={styles.buttons_container}>
            <Pressable onPress={categorySelectionHandler.bind(this,'celebrities')} style={styles.button}>
                <View style={styles.button_inner}>
                    <Ionicons name={'people'} size={20} color={Colors.light} />
                    <Text style={styles.button_text}>Celebrities</Text>
                </View>
            </Pressable>
            <Pressable onPress={categorySelectionHandler.bind(this,'politics')} style={styles.button}>
                <View style={styles.button_inner}>
                    <Ionicons name={'compass'} size={20} color={Colors.light} />
                    <Text style={styles.button_text}>Politics</Text>
                </View>
            </Pressable>
        </View>
    </View>
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: '0%',
        paddingHorizontal: '10%'
    },
    title_container:{
        width: '100%',
        borderBottomWidth: 4,
        borderColor:Colors.light,
        marginBottom: 10,
        paddingVertical: 10
    },
    title_text:{
        textAlign: 'center',
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 22
    },
    buttons_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    button:{
        width: '50%',
        alignItems:'center',
        borderWidth: 3,
        borderColor: Colors.light_dark,
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10
    },
    button_inner:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    button_text:{
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 20
    },
    pressed:{
        opacity: 0.75,
        backgroundColor: Colors.light_dark,
        borderRadius: 4
    }
})