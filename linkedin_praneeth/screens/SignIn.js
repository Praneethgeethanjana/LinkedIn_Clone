/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';


import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '51703670363-ch8skv82rremjumlfq58hlk6ek4h7qqk.apps.googleusercontent.com',
});

export default class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  userlogin = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User loged in!');
        this.props.navigation.navigate('FileUpload');
      })
      .catch(error => {
        console.log('Login Unsuccessfull !');
      });
  };

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    
    // Sign-in the user with the credential
     auth().signInWithCredential(googleCredential);
     return this.props.navigation.navigate('FileUpload');
    
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>LinkedIn SignIn</Text>
        <TextInput
          label="Enter Email"
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
          style={styles.input}
        />

        <TextInput
          label="Enter Password"
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
          style={styles.input}
        />

        <Button style={styles.btn} mode="contained" onPress={this.userlogin}>
          SIGNIN
        </Button>

        <GoogleSigninButton
          style={styles.gbtn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.onGoogleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gbtn: {
    width: 192,
    height: 48,
    marginTop:30,
  },
  btn: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 300,
    marginTop: 15,
  },
  label: {
    marginBottom: 70,
    marginTop: 50,
  },
});
