import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import * as firebase from 'firebase'; // 4.6.0


export default class App extends React.Component {
  
  render() {
    return (
     
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
       <Image
          style={styles.logo}
          source={{uri: 'https://i.pinimg.com/originals/d8/63/12/d86312e1d2bffd7e859366b51877fca1.jpg'}}
        />
        <Text style={styles.title}>Welcome to Medicheck!Please enter your details below.</Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FF99',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
   
    width:120,
    height: 100
  },
title: {
  color:'#3386FF',
  marginTop: 10,
  width: 160,
  textAlign: 'center',
  opacity: 0.9,
 
}
});