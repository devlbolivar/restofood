import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import styles from "./styles";

const TextInput = (props: TextInputProps) => {
  return <RNTextInput style={[styles.input, props.style]} {...props} />;
};

export default TextInput;
