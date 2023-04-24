import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { auth } from "../firebase/config";
export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential;
  } catch (error) {
    // Manejar errores de inicio de sesión aquí
    throw error;
  }
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(userCredential);
    return userCredential;
  } catch (error) {
    // Manejar errores de registro aquí
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
  } catch (error) {
    // Manejar errores de cierre de sesión aquí
    throw error;
  }
};
