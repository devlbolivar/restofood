import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
}

const Button = ({ title, style, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
