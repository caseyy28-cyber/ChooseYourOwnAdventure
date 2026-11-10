import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (

    <View style={styles.container}>
      {/* <Image
        source={require('src/assets/unicorn.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      /> */}
      <Text style={styles.text}>You're a unicorn in the magic forest</Text>
      <Text style={styles.text}>Down the trail, you see a glowing cave up ahead. Do you enter?</Text>
      <Link href="/EnterCave" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
      </Link>
      <Link href="/ExitCave" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>No</Text>
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
