import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { Auth } from '../Firebase';
import { ToastAndroid } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LoadingScreen from './LoadingScreen';

const backgroundImg = { uri: 'https://source.unsplash.com/pWkk7iiCoDM/1080x1920' };

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // add isLoading state

  const handleRegister = async () => {  
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(Auth, username, password);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      let errorMessage = '';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'That email address is already in use!';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address format!';
          break;
          case 'auth/weak-password':
            errorMessage = 'Password should be at least 6 characters!';
            break;
            case 'auth/missing-password':
              errorMessage = 'Password should not be empty!';
              break;
        default:
          errorMessage = error.message;
          break;
      }
      alert(errorMessage);
    }
  };

  if (isLoading) { // if isLoading is true, render the loading screen
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.subtitle}>Sign up with your email and password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry
            />
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegister}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.loginButton, styles.button]} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Already have an account? Log in</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    backgroundColor: '#FFA500',
  },
  loginButton: {
    backgroundColor: '#A8A8A8',
    borderColor: '#FFA500',
    borderWidth: 1,
  },
  buttonText: {
    width: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});