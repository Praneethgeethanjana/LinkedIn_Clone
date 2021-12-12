/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imagePath: ''
    };
  }

  signOut = () =>{
    auth()
    .signOut()
    .then(() => {
        console.log('signed out!!');
        this.props.navigation.navigate('Join');
      });

}

  getimageFromGallery =() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image.path);
      this.setState({
        imagePath: image.path
      })
        this.UploadImage()
    });

  }


  UploadImage = async () => {
    const reference = storage().ref('black-t-shirt-sm.png');
    await reference.putFile(this.state.imagePath);
  }
  
  

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text >LinkedIn </Text>

        <Button
         
          style={{width:200,marginTop:50}}
          mode="contained"
          onPress={this.getimageFromGallery}>
          Add Photo
        </Button>

        <Button
         
          style={{width:200,marginTop:50}}
          mode="contained"
          onPress={this.signOut}>
          SignOut
        </Button>
      </View>
      
    );
  }
}
