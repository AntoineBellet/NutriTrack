import { useAuth } from "@clerk/clerk-expo";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 32,
    textAlign: "center",
  },
});
