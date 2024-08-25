import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';

const Splash = ({navigation}) => {
  const isAuth = async () => {
    setTimeout(async () => {
      navigation.replace('Welcome');
    }, 2000);
  };
  useEffect(() => {
    isAuth();
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require('../../assets/Splash.png')}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
