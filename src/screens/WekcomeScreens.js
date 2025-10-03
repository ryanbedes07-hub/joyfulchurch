import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header Circle with Title */}
        <View style={styles.headerCircle}>
          <Text style={styles.headerText}>JOYFUL</Text>
        </View>

        {/* White Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome!</Text>

          <Image
            source={require('../../assets/cross.png')}
            style={styles.cross}
            resizeMode="contain"
          />

          <Text style={styles.subtitle}>
            You are welcome to {"\n"} <Text style={{ fontWeight: '600' }}>Joyful Church</Text>
          </Text>

          {/* Buttons */}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make container transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCircle: {
    position: 'absolute',
    top:90,
    backgroundColor: '#BAE2FF',
    width: 117,
    height: 117,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#333',
    fontFamily: 'Shrikhand', 
  },
  card: {
    marginTop: 220,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  cross: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  loginBtn: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  signupBtn: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#555',
  },
});
