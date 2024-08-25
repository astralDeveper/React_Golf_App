import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Close, {Open} from '../../assets';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // Create references to each input for focusing
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Function to handle text change in each input
  const handleChangeText = (text, index) => {
    // Update the corresponding index with the entered text
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // If a character is entered, move to the next input
    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Function to handle the backspace key
  const handleKeyPress = ({nativeEvent}, index) => {
    if (nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 20,
            marginTop: height * 0.1,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              color: '#ACC49F',
              fontSize: 18,
              fontFamily: 'Poppins-ExtraBold',
            }}>
            Javea Port Golf Society
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
            }}>
            Don’t have an account?{' '}
            <Text
              style={{
                color: '#ACC49F',
              }}>
              Register
            </Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.container}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.input}
              value={value}
              onChangeText={text => handleChangeText(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
            />
          ))}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: height * 0.05,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Change_Pas');
          }}
          style={{
            backgroundColor: '#1E7F36',
            padding: 5,
            width: width * 0.8,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 20,
    // marginTop: 100,
    width: width * 0.7,
    alignSelf: 'center',
    marginTop: height * 0.05,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 50,
    height: 50,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 100,
    color: '#000',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default Otp;

// import React, { useState, useRef } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// const OTPInput = () => {
//   // Create state to store the values of each text input
//   const [otp, setOtp] = useState(['', '', '', '']);

//   // Create references to each input for focusing
//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];

//   // Function to handle text change in each input
//   const handleChangeText = (text, index) => {
//     // Update the corresponding index with the entered text
//     let newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     // If a character is entered, move to the next input
//     if (text && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   // Function to handle the backspace key
//   const handleKeyPress = ({ nativeEvent }, index) => {
//     if (nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {otp.map((value, index) => (
//         <TextInput
//           key={index}
//           ref={inputRefs[index]}
//           style={styles.input}
//           value={value}
//           onChangeText={(text) => handleChangeText(text, index)}
//           onKeyPress={(e) => handleKeyPress(e, index)}
//           maxLength={1}
//           keyboardType="numeric"
//           textAlign="center"
//         />
//       ))}
//     </View>
//   );
// };

// export default OTPInput;
