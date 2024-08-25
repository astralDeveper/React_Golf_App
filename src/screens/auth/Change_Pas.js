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

const Change_Pas = ({navigation}) => {
  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false);
  const [confirmP, setconfirmP] = useState('');
  const [pass, setPass] = useState('');
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

        <View>
          <View
            style={{
              borderWidth: 1,
              width: width * 0.8,
              borderRadius: 10,
              borderColor: '#D9D9D9',
              paddingHorizontal: 10,
              color: '#000',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#8e8e8e'}
              value={confirmP}
              onChangeText={text => {
                setconfirmP(text);
              }}
              secureTextEntry={showCP == false ? true : false}
              style={{
                width: width * 0.68,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setShowCP(!showCP);
              }}>
              {showCP == false ? <Close /> : <Open />}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              borderWidth: 1,
              width: width * 0.8,
              borderRadius: 10,
              borderColor: '#D9D9D9',
              paddingHorizontal: 10,
              color: '#000',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'#8e8e8e'}
              value={pass}
              onChangeText={text => {
                setPass(text);
              }}
              secureTextEntry={showP == false ? true : false}
              style={{
                width: width * 0.68,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setShowP(!showP);
              }}>
              {showP == false ? <Close /> : <Open />}
            </TouchableOpacity>
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
            confirmP == '' || pass == ''
              ? alert('Please Fill All Fields')
              : navigation.navigate('Tri');
          }}
          style={{
            backgroundColor: !confirmP || !pass ? '#ACC49F' : '#1E7F36',
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

export default Change_Pas;
