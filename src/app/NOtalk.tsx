import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The witch finds it extremly rude that you enter her cave and dare not speak to her</Text>
      <Text style={styles.text}>She attacks you! you die...</Text>
      <Link href="/start" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Start Over</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d0606',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ec8181',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#f49c9c",
  },
  buttonText: {
    color: "#3b0404",
    fontWeight: "600",
  },
});
