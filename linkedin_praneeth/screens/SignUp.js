/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


export default class SignUp extends Component {
    
  
    constructor(props){
        super();
        this.state ={
            username: '',
            email:'',
            password:''
            
        };
      }

      registerUser= () => {
        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createUser) => {
            createUser.user.updateProfile({
                displayName:this.state.username
            })
          console.log('User account created & signed in!');
          this.props.navigation.navigate('FileUpload');
        //   console.log(createUser.user);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      }

    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Join LinkedIn</Text>

<TextInput
                    label="Enter UserName"
                    value={this.state.username}
                    onChangeText={text => this.setState(
                    {username: text}
                )}
                style={styles.input}
                />

<TextInput
                    label="Enter Email"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                    {email: text}
                )}
                style={styles.input}
                />

<TextInput
                    label="Enter Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                    {password: text}
                )}
                style={styles.input}
                />

<Text style={styles.agree}>By clicking Agree & join,you agree to the LinkedIn UserAgreement,Privacy Policy , and Cookie Policy</Text>

                <Button style={styles.btn} mode="contained" onPress={this.registerUser}>
                    Agree & Join
                </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        borderRadius:20,
        height:40,
        width:170
    },
    container : {
        flex : 1,
        alignItems: 'center'
    },
    input:{
        width:300,
        marginTop:15
    },
    label:{
        marginBottom: 70,
        marginTop: 50,
        fontSize:20
    },
    
     agree:{
         marginBottom:20,
         marginTop:20,
         
        }
    
})