import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Sec = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Tri');
      }}
      style={{
        backgroundColor: 'blue',
      }}>
      <Text>basim</Text>
    </TouchableOpacity>
  );
};

export default Sec;
