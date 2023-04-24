import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { signUpWithEmailAndPassword } from "../../services/authService";

type RegisterScreenNavigationProp = StackNavigationProp<any, "Register">;

interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
}

const Register = ({ navigation }: RegisterProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      // Mostrar un mensaje de error si las contraseñas no coinciden
      console.log("Password no coinciden");
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password);
      // Navegar a la pantalla principal después de un registro exitoso
      navigation.replace("Main");
    } catch (error) {
      console.log(error);
      // Manejar errores de registro aquí
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="Registrarse"
        onPress={handleRegister}
        style={styles.registerButton}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.loginLink}
      >
        <Text style={styles.loginLinkText}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
