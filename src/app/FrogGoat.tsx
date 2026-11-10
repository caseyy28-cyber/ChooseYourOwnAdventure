import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      {/* <Image
        style={{ width: 200, height: 200 }}
        source={require('../assets/frog.png')}
        resizeMode="contain"
        accessibilityLabel="Frog"
      /> */}
      <Text style={styles.text}>the goat eats you, i guess "BAHHHHH" means "im gonna eat you"</Text>
      <Text style={styles.text}>the end</Text>
      <Link href="/start" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>start over</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#085b2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#81ec88',
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#cff2ba",
  },
  buttonText: {
    color: "#073e10",
    fontWeight: "600",
  },
});
