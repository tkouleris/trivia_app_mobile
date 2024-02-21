import {Text, View} from "react-native";
import {useEffect} from "react";

function RoundResult({route}){
    useEffect(() => {
        console.log(route.params.results)
    }, []);

    return <View>
        <Text>Results</Text>
    </View>
}

export default RoundResult;