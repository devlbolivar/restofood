import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: "#ff0000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
