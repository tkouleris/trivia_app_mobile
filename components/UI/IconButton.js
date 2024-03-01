import {Pressable, StyleSheet, Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {Colors} from "../../constants/colors";
import {UserContext} from "../../store/user-context";
import {useContext} from "react";

function IconButton({icon, size, color, onPress}){
    const userCtx = useContext(UserContext)

    return <Pressable style={({pressed})=>[styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons  name={icon} size={size} color={color} />
        <Text style={{color:Colors.light}}>{userCtx.user.username}</Text>
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    button:{
        padding: 8,
        justifyContent:'center',
        alignItems: 'center'
    },
    pressed:{
        opacity: 0.7
    }
})