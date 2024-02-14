import {View, Text, StyleSheet} from "react-native";
import {Colors} from "../constants/colors";

function Dashboard(){
    return <View style={styles.container}>
        <View style={styles.title_container}>
            <Text style={styles.title_text}>Select Category</Text>
        </View>
        <View style={styles.buttons_container}>
            <View style={styles.button}>
                <Text style={styles.button_text}>Film</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.button_text}>Books</Text>
            </View>
        </View>
        <View style={styles.buttons_container}>
            <View style={styles.button}>
                <Text style={styles.button_text}>Celebrities</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.button_text}>Politics</Text>
            </View>
        </View>
    </View>
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        paddingTop: '15%',
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
    button_text:{
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: 20
    }
})