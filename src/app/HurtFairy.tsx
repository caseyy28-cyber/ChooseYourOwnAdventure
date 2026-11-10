import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>the fairy is actually John Quinones, IT WAS A TEST</Text>
      <Text style={styles.text}>she curses you, turning you into a frog, she then flies away.</Text>
      <Link href="/GOAT" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b440e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#81eca1',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#508a29",
  },
  buttonText: {
    color: "#fbf9fb",
    fontWeight: "600",
  },
});
