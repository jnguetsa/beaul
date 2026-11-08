import "../../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="index" options={{ title: "Accueil" , headerLargeTitleEnabled:true, headerUserInterfaceStyle: 'dark'}} />
    <Stack.Screen name={"details"} options={{ title: "Détails" , headerLargeTitleEnabled:true}} />
  </Stack>;
}
