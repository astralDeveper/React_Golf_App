import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  
  const Start = ({navigation}) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          resizeMode="cover"
          style={styles.container}
          source={require('../../assets/Welcome.png')}></ImageBackground>
        <View
          style={{
            height: height * 0.15,
            justifyContent: 'space-between',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 50,
          }}>
          <TouchableOpacity
          onPress={()=>{
              navigation.navigate("Previous_Match",{data:"admin"})
          }}
            style={{
              backgroundColor: '#1E7F36',
              padding: 5,
              width: width * 0.8,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
              }}>
              List Of Golf Matches 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('User');
            }}
            style={{
              backgroundColor: '#1E7F36',
              padding: 5,
              width: width * 0.8,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
              }}>
              List Of Users
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const {height, width} = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default Start;
  