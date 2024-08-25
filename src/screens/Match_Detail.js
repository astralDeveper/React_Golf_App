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
import React, {useState} from 'react';
import {Previous} from './Dummy';

const Match_Detail = ({navigation,route}) => {
const {data} = route.params

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.iconButton}>
          <Image source={require('../assets/Back.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Handicap Calculator</Text>
        <Image
          source={require('../assets/Small_Logo.png')}
          style={styles.logo}
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: '#ACC49F',
        }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#ACC49F',
              padding: 10,
              //   marginVertical: 5,
              //   borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#425252',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Computed WHS Handicap:{' '}
            </Text>
            <TouchableOpacity>
              <Image source={require('../assets/Printer.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={Previous}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal:20,
                    marginTop:10
                  }}>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.15,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.no}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.player}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.course}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.slope}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.rating}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.deadline}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.ags}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.ratio}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: index == 0 ? '#425252' : '#FFF',
                      borderRightWidth: 2,
                      width: width * 0.4,
                      alignItems: 'center',
                      padding: index == 0 && 10,
                      borderColor: index == 0 ? '#FFF' : '#000',
                    }}>
                    <Text
                      style={{
                        color: index == 0 ? '#FFF' : '#000',
                      }}>
                      {item.result}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

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
    // paddingHorizontal: width * 0.05,
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

export default Match_Detail;
