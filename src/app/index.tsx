import {View} from "react-native";
import {Link} from "expo-router";


export default function Index(){
    return(
        
        <View className="flex-1 items-center justify-center" >
            <Link className="text-2xl" href="/(auth)">Go to Auth</Link>
        </View>
    )
}