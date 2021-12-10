/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#4045a3');

const Main = () => {
  const navigation = useNavigation();

  return (
    <native.NativeBaseProvider>
      <native.Image
        alt="Main Image"
        source={require('../asserts/linkedin 2')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />

      <native.Center flex={1}>
        <native.Text
          color={'white'}
          w="100%"
          fontFamily="Rattoney"
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
          onPress={() => navigation.navigate('Login')}>
          Get Started
        </native.Button>
      </native.Box>
    </native.NativeBaseProvider>
  );
};

export default Main;
