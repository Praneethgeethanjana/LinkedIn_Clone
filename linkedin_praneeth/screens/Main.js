/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import img1 from '../asserts/linkedin1.jpg';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#4045a3');

const Main = () => {
  const navigation = useNavigation();

  return (
    <native.NativeBaseProvider>
      <native.Image
        alt="Main Image"
       // source={require('../asserts/linkedin 2.jpg')}
       source={img1}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />


      <native.Center flex={1}>
        <native.Text
        marginLeft={8}
          color={'blue.700'}
          w="100%"
          fontSize="50px"
          textAlign="center">
          LinkedIn
        </native.Text>
      </native.Center>


      <native.Box position="absolute" w="100%" bottom={5}>
        <native.Button
           colorScheme="blue"
          // bg="#2d3436"
          fontSize="28px"
          h="52px"
          w="75%"
          borderRadius={'50px'}
          margin="auto"
           onPress={() => navigation.navigate('Join')}
          >
          GET STARTED
        </native.Button>
      </native.Box>
    </native.NativeBaseProvider>
  );
};

export default Main;
