import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 items-center" +
        " justify-center font-bold bg-green-500  text-xl"}>
      <Text className={"text-white text-xl font-bold"}>
<Link href={"/details"}>Détails</Link>

      </Text>
    </View>
  );
}

