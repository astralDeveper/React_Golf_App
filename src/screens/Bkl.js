import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

const Bkl = ({ navigation }) => {
  const [data, setData] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: (i + 1).toString(),
      society: '',
      player: '',
      course: '',
      slopeIndex: '',
      fieldRating: '',
      AGS: '',
      courseRating: '',
      Result: '',
    })),
  );
  const [scoreDifferentials, setScoreDifferentials] = useState([]);
  const [handicapIndex, setHandicapIndex] = useState(null);

  const handleInputChange = (value, id, field) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setData(newData);

    if (['slopeIndex', 'fieldRating', 'AGS', 'courseRating'].includes(field)) {
      const updatedItem = newData.find(item => item.id === id);
      const { AGS, courseRating, slopeIndex, fieldRating } = updatedItem;
      if (AGS && courseRating && slopeIndex && fieldRating) {
        const scoreDifferential = ((AGS - courseRating) / slopeIndex) * 113;
        setScoreDifferentials(prev => {
          const filtered = prev.filter(item => item.id !== id);
          return [...filtered, { id, scoreDifferential }];
        });
      }
    }
  };

  const computeHandicapIndex = () => {
    if (scoreDifferentials.length < 8) return; // Need at least 8 scores

    const best8Differentials = scoreDifferentials
      .sort((a, b) => a.scoreDifferential - b.scoreDifferential)
      .slice(0, 8);

    const averageBest8 =
      best8Differentials.reduce(
        (acc, curr) => acc + curr.scoreDifferential,
        0,
      ) / 8;
    const index = averageBest8 * 0.96;

    const lowestIndex = 0; // Replace with actual lowest index from last 12 months
    const finalHandicapIndex = applyAdjustments(index, lowestIndex);
    setHandicapIndex(finalHandicapIndex);

    // Update Result for each row
    const updatedData = data.map(item => {
      if (
        item.slopeIndex &&
        item.fieldRating &&
        item.AGS &&
        item.courseRating
      ) {
        const scoreDifferential =
          ((item.AGS - item.courseRating) / item.slopeIndex) * 113;
        return {
          ...item,
          Result: (scoreDifferential * 0.96).toFixed(2)
        };
      }
      return item;
    });
    setData(updatedData);
  };
// console.log(data.Result)
  const applyAdjustments = (newHandicapIndex, lowestIndex) => {
    let adjustedIndex = newHandicapIndex;

    // Soft Cap Adjustment
    const softCapThreshold = 3.0;
    if (newHandicapIndex > lowestIndex + softCapThreshold) {
      adjustedIndex =
        lowestIndex +
        softCapThreshold +
        0.5 * (newHandicapIndex - (lowestIndex + softCapThreshold));
    }

    // Hard Cap Adjustment
    const hardCap = 5.0;
    if (adjustedIndex > lowestIndex + hardCap) {
      adjustedIndex = lowestIndex + hardCap;
    }

    // ESR Adjustment (omitted for simplicity)
    return adjustedIndex;
  };

  const handleComputeWHS = () => {
    computeHandicapIndex();
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: width * 0.15 }}>
        <Text style={styles.cell}>{item.id}</Text>
      </View>
      <TextInput
        style={styles.inputCell}
        placeholder="Society"
        value={item.society}
        onChangeText={text => handleInputChange(text, item.id, 'society')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Player"
        value={item.player}
        onChangeText={text => handleInputChange(text, item.id, 'player')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Course"
        value={item.course}
        onChangeText={text => handleInputChange(text, item.id, 'course')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Slope Index"
        value={item.slopeIndex}
        onChangeText={text => handleInputChange(text, item.id, 'slopeIndex')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Field Rating"
        value={item.fieldRating}
        onChangeText={text => handleInputChange(text, item.id, 'fieldRating')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Deadline"
        value={item.deadline}
        onChangeText={text => handleInputChange(text, item.id, 'deadline')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="AGS"
        value={item.AGS}
        onChangeText={text => handleInputChange(text, item.id, 'AGS')}
      />
      <TextInput
        style={styles.inputCell}
        placeholder="Course Rating"
        value={item.courseRating}
        onChangeText={text => handleInputChange(text, item.id, 'courseRating')}
      />
      <View
        style={{
          width: width * 0.2,
          backgroundColor: '#FFF',
          paddingVertical: 5,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#9ca79e',
          backgroundColor: '#f5f5f5',
        }}>
        <Text style={{ color: '#000', fontSize: 16 }}>{item.Result}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/Small_Logo.png')} style={styles.logo} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.iconButton}>
          <Image source={require('../assets/Back.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Handicap Calculator</Text>
        <View style={styles.iconButton} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#ACC49F',
              padding: 10,
              marginVertical: 5,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#425252',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Computed WHS Handicap:{' '}
              {handicapIndex ? handicapIndex.toFixed(2) : 'N/A'}
            </Text>
            <TouchableOpacity>
              <Image source={require('../assets/Printer.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Add New Round</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Restore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Reset Values</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleComputeWHS}>
              <Text style={styles.buttonText}>Compute WHS</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#9ca79e',
                  paddingVertical: 5,
                }}>
                <Text style={[styles.headerCell, { width: width * 0.14 }]}>
                  S.NO
                </Text>
                <Text style={styles.headerCell}>Name of Golf Society</Text>
                <Text style={styles.headerCell}>Name of Player</Text>
                <Text style={styles.headerCell}>Name of Golf Course</Text>
                <Text style={styles.headerCell}>Slope Index</Text>
                <Text style={styles.headerCell}>Field Rating</Text>
                <Text style={styles.headerCell}>Deadline</Text>
                <Text style={styles.headerCell}>AGS</Text>
                <Text style={styles.headerCell}>Course Ratio</Text>
                <Text style={styles.headerCell}>Result</Text>
              </View>
              <FlatList
                data={data}
                renderItem={renderRow}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e0ebd4',
  },
  logo: {
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
  },
  headerText: {
    fontSize: 18,
    color: '#425252',
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    flex: 1,
    backgroundColor: '#e0ebd4',
    paddingHorizontal: width * 0.05,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#8b9e6c',
    borderRadius: 4,
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
  headerCell: {
    textAlign: 'center',
    fontSize: 12,
    color: '#3d3d3d',
    width: width * 0.2,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#9ca79e',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cell: {
    textAlign: 'center',
    fontSize: 14,
    color: '#3d3d3d',
  },
  inputCell: {
    fontSize: 14,
    borderColor: '#9ca79e',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    width: width * 0.2,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  iconButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Bkl;
