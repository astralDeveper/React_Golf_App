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

const Register = ({navigation}) => {
  const [showP, setShowP] = useState(false);
  const [cShowP, setCShowP] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [confirmP, setConfirmP] = useState('');
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
            navigation.navigate("Login")
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
            Already have an Account?{' '}
            <Text
              style={{
                color: '#ACC49F',
              }}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>

        <View>
          <View>
            <TextInput
              placeholder="Name"
              placeholderTextColor={'#8e8e8e'}
              value={name}
              onChangeText={text => {
                setName(text);
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
          <View
            style={{
              marginTop: 20,
            }}>
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
              placeholder="Password"
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
              value={confirmP}
              onChangeText={text => {
                setConfirmP(text);
              }}
              secureTextEntry={cShowP == false ? true : false}
              style={{
                width: width * 0.68,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setCShowP(!cShowP);
              }}>
              {cShowP == false ? <Close /> : <Open />}
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
            email == '' || pass == '' || name == '' || confirmP == ''
              ? alert('Please Fill All Fields')
              : navigation.navigate('Tri');
          }}
          style={{
            backgroundColor:
              email == '' || pass == '' || name == '' || confirmP == ''
                ? '#ACC49F'
                : '#1E7F36',
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

export default Register;
