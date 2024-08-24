import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Whs = ({navigation}) => {
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
          Which are the formulas to compute WHS handicap?
        </Text>
        <View style={{width:10}}></View>
      </View>
      <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>– Documentación:</Text>
      <Text style={styles.listItem}>• PDF WHS Rules of Handicapping USGA</Text>
      <Text style={styles.listItem}>• PDF Presentation</Text>
      <Text style={styles.listItem}>• Video</Text>
      <Text style={styles.listItem}>• Excel WHS Calculator</Text>

      <Text style={styles.sectionTitle}>– Golf Course parameters</Text>
      <Text style={styles.paragraph}>
        Each officially rated golf course is described by two numbers: the <Text style={styles.boldText}>course rating (CR)</Text> and the <Text style={styles.boldText}>slope rating (SR)</Text>. The course rating of a particular course is a number generally between 67 and 77 that is used to measure the average "good score" by a scratch golfer on that course. The slope rating of a particular course is a number between 55 and 155 that describes the relative difficulty of a course for a bogey golfer compared to a scratch golfer. These two numbers are used to calculate a player’s handicap differential, which is used to adjust a player’s score about par according to the slope and rating of the course. The slope rating for a golf course of average difficulty is 113.
      </Text>
      <Text style={styles.paragraph}>
        The CR and SR are provided by the field or national federations and are different for each outing of a course for both 9 and 18 holes. Usually, they are printed on the scorecards and on the websites of practically all courses.
      </Text>

      <Text style={styles.sectionTitle}>– Golf player parameters:</Text>
      <Text style={styles.paragraph}>
        The player’s <Text style={styles.boldText}>index or real handicap (HI)</Text> is calculated by averaging the individual Score Differential obtained in the eight best results of the last 20 scored in this way, taking into account the trajectory and not only the result of an isolated match. Indicate that you have to score at least three 18-hole games to start having a real handicap assigned.
      </Text>
      <Text style={styles.formula}>HI = (Summation of 8 best SD of the last 20) / 8</Text>
      <Text style={styles.paragraph}>
        The <Text style={styles.boldText}>Course Handicap (CH)</Text> is the one assigned to the player for the course where he will play and is calculated with this formula:
      </Text>
      <Text style={styles.formula}>CH = (HI * SR) / 113 + (CR - PAR)</Text>
      <Text style={styles.paragraph}>
        The <Text style={styles.boldText}>Individual Handicap (HI)</Text> or handicap index is the one obtained in a round and is calculated with the following formula:
      </Text>
      <Text style={styles.formula}>SCORE DIFFERENTIAL = (HANDICAP_ADJUSTED_SCORE - COURSE_RATING - PCC) * (113 / COURSE_SLOPE)</Text>

      <Text style={styles.sectionTitle}>– Regarding the extra points:</Text>
      <Text style={styles.paragraph}>
        The <Text style={styles.boldText}>Result Adjusted to Handicap (RAH)</Text> is calculated with the following formula:
      </Text>
      <Text style={styles.paragraph}>
        The <Text style={styles.boldText}>Adjusted Gross Result (RBA)</Text> is obtained by adding the strokes made on each hole, but in those holes where the double bogey has exceeded the par assigned to the player for that hole, a double bogey is scored. This prevents them from being penalized on holes where they have very poor results, that is, the equivalent of having 0 Stableford points (this is what we know as a line that allows us to pick up the ball if this value is exceeded in order to speed up the matches).
      </Text>
      <Text style={styles.paragraph}>
        The Par for each hole is calculated by distributing the points of CH between the most difficult holes on the field, that is, starting with the holes with the least handicap, to increase the par of each of them.
      </Text>
      <Text style={styles.paragraph}>
        As an example, a player with HJ 3 would have three points to share. Imagine that the three most difficult holes are a par 3, 4, and 5; in this case, they would become par 4, 5, and 6, respectively. A player with HJ 18 would have 18 to deliver one more stroke on each hole. One with 20 would have 2 holes with 2 more strokes and 16 with one more, and so on.
      </Text>

      <Text style={styles.sectionTitle}>PCC Playing Conditions Calculation</Text>
      <Text style={styles.paragraph}>
        When abnormal playing conditions cause scores to be unusually low or high on a given day, a PCC will be used to adjust the score to reflect the actual player's performance.
      </Text>
      <Text style={styles.paragraph}>
        The PCC will be conservative, an integer value, and simple (-1, -2, .. +1, +2). In mikadi, we don’t compute this exceptional parameter.
      </Text>

      <Text style={styles.sectionTitle}>Limiting Upward Movement of Handicap Index</Text>
      <Text style={styles.paragraph}>
        One of the main features of the new global golf handicap system will be a cap that prevents players from rising too quickly. The maximum your handicap will be able to rise in a calendar year with the global system is <Text style={styles.boldText}>FIVE</Text> strokes.
      </Text>
      <Text style={styles.paragraph}>
        It will work by first finding an anchor point, or a player’s <Text style={styles.boldText}>low handicap index (LHI)</Text>. This is the lowest handicap index a golfer has achieved within the last 12 months.
      </Text>
      <Text style={styles.paragraph}>
        The cap will then limit the increase of that handicap index, again over the rolling 12-month period, “measured against the player’s lowest handicap index within that period of time.” There are two forms of cap – soft and hard.
      </Text>
      <Text style={styles.paragraph}>
        A <Text style={styles.boldText}>soft cap</Text> means that when a new calculated handicap index is more than three strokes above the player’s lowest index within the trailing 12 months, the increase is suppressed so only half of any rise above three strokes is applied.
      </Text>
      <Text style={styles.paragraph}>
        I have a low handicap index of 12 over the last year. But my best 8 out of 20 scores now give me a calculated handicap index of 17.0. In this case, I get an increase of three strokes before the soft cap is calculated.
      </Text>
      <Text style={styles.paragraph}>
        That soft cap calculation, to get my exact return, uses this formula:
      </Text>
      <Text style={styles.formula}>½ x (Calculated handicap index – (Low handicap Index + 3))</Text>
      <Text style={styles.paragraph}>
        So that’s ½ x (17.0 – (12.0 + 3)). Or to put it more simply: ½ x (17-15) or ½ x 2.
      </Text>
      <Text style={styles.paragraph}>
        The soft cap, therefore, is an extra stroke (1/2 x 2 = 1) and my handicap increases by four shots (3+1). I’m now playing off 16.
      </Text>
      <Text style={styles.paragraph}>
        There is also a <Text style={styles.boldText}>hard cap</Text>, which is the maximum your mark can increase over that low handicap index in a rolling 12 months. That number is five. So it doesn’t matter how many 1/2s you add on in the soft cap, and it doesn’t matter how badly you’ve played in the intervening period. You can only increase a maximum of five shots in that period.
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
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
    },
    listItem: {
      fontSize: 16,
      marginVertical: 4,
    },
    paragraph: {
      fontSize: 16,
      marginVertical: 8,
      lineHeight: 24,
    },
    boldText: {
      fontWeight: 'bold',
    },
    formula: {
      fontSize: 16,
      fontStyle: 'italic',
      marginVertical: 8,
    },
  });
export default Whs;
