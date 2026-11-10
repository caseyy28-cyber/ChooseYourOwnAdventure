import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      {/* <Image
        style={{ width: 200, height: 200 }}
        source={require('../../assets/unicorn.png')}
        resizeMode="contain"
      /> */}
      <Text style={styles.text}>Translation: "im gonna eat you", he eats you</Text>
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
