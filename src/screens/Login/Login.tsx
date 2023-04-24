import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { signInWithEmailAndPassword } from "../../services/authService";

type LoginScreenNavigationProp = StackNavigationProp<any, "Login">;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      // Navegar a la pantalla principal después de un inicio de sesión exitoso
      navigation.replace("Main");
    } catch (error) {
      // Manejar errores de inicio de sesión aquí
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="Iniciar sesión"
        onPress={handleLogin}
        style={styles.loginButton}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.registerLink}
      >
        <Text style={styles.registerLinkText}>
          ¿No tienes una cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
