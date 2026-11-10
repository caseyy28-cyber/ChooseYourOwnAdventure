import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      {/* <Image style={{ width: 200, height: 200 }} source={require('../assets/cupcake.png')} /> */}
      <Text style={styles.text}>She greets you kindly and gives you a plate of cupcakes and muffins</Text>
      <Text style={styles.text}>you leave with a full stomach</Text>
      <Link href="/ExitCave" asChild>
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Leave Cave</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#731d82',
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
