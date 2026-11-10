import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
    <Image style={{ width: 200, height: 200 }} source={require('../assets/witch.png')} />
      <Text style={styles.text}>The cave has a witch inside!</Text>
      <Text style={styles.text}>Do you talk to her?</Text>
      <Pressable
        accessibilityRole="button"
        style={styles.button}
        onPress={() => router.push('/YEStalk')}
      >
        <Text style={styles.buttonText}>Yes</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        style={styles.button}
        onPress={() => router.push('/NOtalk')}
      >
        <Text style={styles.buttonText}>No</Text>
      </Pressable>
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
