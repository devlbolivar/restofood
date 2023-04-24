import React from "react";
import styles from "./styles";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "../../services/authService";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

const Main = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Navegar a la pantalla de inicio de sesión después de cerrar sesión
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      // Manejar errores de cierre de sesión aquí
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
