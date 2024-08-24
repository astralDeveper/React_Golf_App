import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Work = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Image
        source={require('../assets/Small_Logo.png')}
        style={{alignSelf: 'center', marginVertical: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal:20,backgroundColor:"#ACC49F",
          paddingVertical:5
        }}>
        <TouchableOpacity onPress={()=>{
            navigation.pop()
        }}>
          <Image source={require('../assets/Back.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: '#425252',
            fontFamily: 'Poppins-SemiBold',
            width: width * 0.65,

          }}>
          How does the new global handicap system (WHS) work?
        </Text>
        <View style={{width:10}}></View>
      </View>
      <ScrollView style={styles.container}>
      <Text style={styles.title}>World Handicap System (WHS)</Text>
      <Text style={styles.text}>
        On January 1, 2020, the World Handicap System (WHS) came into force, introducing a unified way to measure handicaps globally, replacing all previous systems (USGA, EGA, CONGU, etc.).
      </Text>

      <Text style={styles.text}>
        Documentation:
        {'\n'}- PDF WHS Rules of Handicapping USGA
        {'\n'}- PDF Presentation
        {'\n'}- Video
      </Text>

      <Text style={styles.subtitle}>Characteristics of the WHS:</Text>
      <Text style={styles.text}>
        {'\u2022'} It is global and can be applied in different fields and countries. All courses must have data from the USGA Course and Slope Rating System, already used in more than 80 countries, which allows for weather-related adjustments if relevant.
      </Text>
      <Text style={styles.text}>
        {'\u2022'} It is flexible, allowing the computation of both tournament scores and those obtained in casual games. This way, a player's handicap adjusts more effectively to their real ability, even if they do not regularly play in tournaments.
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Allows daily revisions and updates of the handicap.
      </Text>

      <Text style={styles.subtitle}>New Features of the WHS:</Text>
      <Text style={styles.text}>
        {'\u2022'} Course rating and slope rating
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Minimum number of scores to obtain a handicap
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Competitive and recreational scores to count for handicap
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Handicaps will be calculated from an average of recent scores
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Maximum handicap of 54
      </Text>
      <Text style={styles.text}>
        {'\u2022'} Adjustments for abnormal course and weather conditions
      </Text>

      <Text style={styles.text}>
        The official website of the new World Handicap System is{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('http://www.whs.com')}>
          www.whs.com
        </Text>, where you can find videos and materials to help you understand this new system.
      </Text>
    </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10,
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
  });
export default Work;
