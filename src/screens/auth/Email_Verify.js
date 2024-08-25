import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import Close, {Open} from '../../assets';
  
  const Email_Verify = ({navigation}) => {

    const [email, setEmail] = useState('');

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
          onPress={()=>{
              navigation.navigate("Register")
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
  
          <View>
            <View>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={'#8e8e8e'}
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
                style={{
                  borderWidth: 1,
                  width: width * 0.8,
                  borderRadius: 10,
                  borderColor: '#D9D9D9',
                  paddingHorizontal: 10,
                  color: '#000',
                  alignSelf: 'center',
                }}
              />
            </View>

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
              email == '' 
                ? alert('Please Enter Email')
                : navigation.navigate('Otp');
            }}
            style={{
              backgroundColor: !email  ? '#ACC49F' : '#1E7F36',
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
  
  export default Email_Verify;
  