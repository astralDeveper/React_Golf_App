import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const Tri = ({navigation}) => {
  const {height, width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/image3.png')}
        style={[styles.backgroundImage, {height: height, width: width}]}
      />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Buttons */}
      <View>
        <View style={styles.buttonsContainer1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bkl')}
            style={styles.button1}>
            <Text style={styles.buttonText1}>Handicap calculator</Text>
            <Image source={require('../assets/results.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Whs")
          }} style={styles.button}>
            <Text style={styles.buttonText}>
              Which are the formulas to compute WHS handicap?
            </Text>
            <Image source={require('../assets/Arrow3.png')} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            navigation.navigate("Handicap")
          }} style={styles.button}>
            <Text style={styles.buttonText}>
              What is the handicap for a golf player?
            </Text>
            <Image source={require('../assets/Arrow3.png')}  />
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Work")
          }}
          style={styles.button}>
            <Text style={styles.buttonText}>
              How does the new global handicap system (WHS) work?
            </Text>
            <Image source={require('../assets/Arrow3.png')} style={{}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006D34',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  logo: {
    height: 207.74,
    width: 200,
  },
  buttonsContainer1: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20,
    width: width * 0.9,
  },
  button1: {
    backgroundColor: '#ACC49F',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 20,

    marginLeft: 12,
    marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.85,
  },
  buttonsContainer: {
    // marginTop: ,
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.6)',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: width * 0.9,
    
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: width * 0.85,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#006D34',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Poppins-Bold',width:width*0.65
  },
  buttonText1: {
    color: '#425252',
    fontSize: 18,
    // fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

export default Tri;
