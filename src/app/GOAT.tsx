import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('../assets/goat.png')}
        resizeMode="contain"
      /> */}
      <Text style={styles.text}>You continue on the path encountering a wise wizard goat with a lengthy beard, she starts speaking in goatnesss "BAHHHHH" she screams. luckily, unicorns speak goatness.</Text>
      <Text style={styles.text}>Please select which animal you are.</Text>
      <Link href="/UnicornGoat" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Unicorn</Text>
        </Pressable>
      </Link>
      <Link href="/FrogGoat" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Frog</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#422048',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#ca81ec',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#ffc3fc",
  },
  buttonText: {
    color: "#e553cd",
    fontWeight: "600",
  },
});
