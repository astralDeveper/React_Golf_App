import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Handicap = ({navigation}) => {
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
          What is the handicap for a golf player?
        </Text>
        <View style={{width:10}}></View>
      </View>
      <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        The main purpose of a handicap system is to allow players of different levels of play, both men and women, to compete in balanced conditions.
      </Text>
      <Text style={styles.paragraph}>
        In stroke play, it is used to calculate a net score from the number of strokes played during a competition, thus allowing players of different proficiency to play against each other on somewhat equal terms. In match play, the handicap difference between players is used to determine the number of strokes the high handicap player should receive from the low handicapper during the playing of their round.
      </Text>
      <Text style={styles.paragraph}>
        The higher the handicap of a player, the poorer the player is relative to those with lower handicaps. Official handicaps are administered by golf clubs with regional and national golf associations providing additional peer reviewing for low and very low handicaps respectively.
      </Text>
      <Text style={styles.paragraph}>
        The World Handicap System is expected to launch in January 2020. It is designed to welcome more players, to make golf easier to understand, and to give all golfers a handicap which is portable all around the globe.
      </Text>
      <Text style={styles.paragraph}>
        It will replace the six different systems currently used by over 15 million golfers in more than 80 countries.
      </Text>
      <Text style={styles.paragraph}>
        – Documentation: PDF WHS Rules of Handicapping USGA - PDF Presentation - Video
      </Text>
    </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 12,
    },
  });
export default Handicap;
