import { ActivityIndicator, Button, Text, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";
import { useHostedAuth } from "@clerk/expo/hosted-auth";

export default function AuthIndex() {
    const { isLoaded, isSignedIn } = useAuth();
    const { startHostedAuth } = useHostedAuth();

    if (!isLoaded) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" />
                <Text className="mt-2 text-gray-700">Chargement...</Text>
            </View>
        );
    }

    if (isSignedIn) return <Redirect href="/(tabs)/index" />;

    const handleSignIn = async () => {
        try {
            await startHostedAuth({ mode: "sign-up" });
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-green-500">
            <Button title="Sign up" onPress={handleSignIn} />
        </View>
    );
}