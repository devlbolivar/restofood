import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Main from "../screens/Main/Main";
import { auth } from "../firebase/config";
import { TouchableOpacity, Text, View } from "react-native";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setIsLoading(false);
    });

    // Limpiar el observador al desmontar el componente
    return () => unsubscribe();
  }, []);

  const AuthScreens = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
      // Renderizar un componente de pantalla de carga o un indicador de actividad aquí
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthScreens}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
