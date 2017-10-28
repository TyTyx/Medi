import React from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { AppRegistry, Navigator, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDl_UAMSe8yCzcpq2jtF9mHMOhp0V0-RqU",
    authDomain: "medicheck-8ada1.firebaseapp.com",
    databaseURL: "https://medicheck-8ada1.firebaseio.com",
    projectId: "medicheck-8ada1",
    storageBucket: "medicheck-8ada1.appspot.com"
    //messagingSenderId: "255479868504"
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();



  export default class Login extends React.Component {
  	constructor(props){
  		super(props);
  		this.state={
  			email:'',
  			password:''
  		}
  	}
  	onLoginPress = (){
  		const promise = auth.signInWithEmailAndPassword(email, password); // method return promises
		promise.catch(() => console.log(error);)
  	  	
  	  	//auth.createUserWithEmailAndPassword(email, pass); // method return promises
  	}
  	onSignUpPress = (){
  		auth.createUserWithEmailAndPassword(email, password); // method return promises
		promise.catch(() => console.log(error);)
  		
  	}

	  //takes in a call back
	  auth.onAuthStateChanged(firebaseUser => {
	  	if(firebaseUser){
	  		console.log(firebaseUser);
	  	}else{
	  		console.log("Log in failed!");
	  	}

	  });
	  // when logged in populate with user info, logs out becomes NULL




  	render(){
  		return (
		 <View style={styles.container}>
		     <StatusBar
		     barStyle="dark-content"
		     />
			        <TextInput
			        placeholder="Email"
			        placeholderTextColor="#3386FF"
			        returnKeyType="next" //changes what return key looks like
			        onSubmitEditing={()=>this.passwordInput.focus()}// this will jump to password
			        keyboardType="email-address"//changes keyboard to include @ signs
			        autoCapitalize="none"
			        autoCorrect={false}
			        style={styles.input}
			        />

			        <TextInput
			        placeholder="Password"
			        placeholderTextColor="#3386FF"
			        returnKeyType="go" //Changes what return key looks like
			        secureTextEntry
			        style={styles.input}
			        ref={(input)=> this.passwordInput=input}
			        />
			 
			          <Button
			             title="Login"
			              onPress={this.onLoginPress.bind(this)}
			            
			          />
			          <Button
			             title="Sign-up"
			              onPress={this.onSignUpPress.bind(this)}
			            
			          />
	         </View>
  			);
  	}
  }















    onLoginPress = () => {
    this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
  };