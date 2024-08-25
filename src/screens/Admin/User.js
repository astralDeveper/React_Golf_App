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
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Previous, Users} from '../Dummy';

const User = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.iconButton}>
          <Image
            source={require('../../assets/Back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Handicap Calculator</Text>
        <Image
          source={require('../../assets/Small_Logo.png')}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          margin: 10,
          alignSelf: 'flex-end',
          backgroundColor: '#ACC49F',
          padding: 10,
          borderRadius: 10,
        }}>
        <Image source={require('../../assets/tools.png')} />
      </TouchableOpacity>
      <ScrollView
        style={{
          backgroundColor: '#ACC49F',
        }}>
        {/* <View style={styles.container}>
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
                <Image source={require('../../assets/Printer.png')} />
              </TouchableOpacity>
            </View>
          </View> */}

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={Users}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginTop: 10,
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
                      {item.mail}
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
                      justifyContent:"center"
                    }}>
                    <View>
                      {index === 0 ? (
                        <Text
                          style={{
                            color: '#FFF',
                          }}>
                          {item.result}
                        </Text>
                      ) : item.result === 'true' ? (
                        <Image source={require('../../assets/ok.png')} />
                      ) : (
                        <Image source={require('../../assets/cros.png')} />
                      )}
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              width: 300,
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, marginBottom: 20}}>
              Choose an action
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#ACC49F',
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
                width: '100%',
                alignItems: 'center',
              }}
              onPress={() => {
                setModalVisible(false);
                // Handle action for the first button
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>Latest</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#ACC49F',
                padding: 10,
                borderRadius: 10,
                width: '100%',
                alignItems: 'center',
              }}
              onPress={() => {
                setModalVisible(false);
                // Handle action for the second button
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>Oldest</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => setModalVisible(false)}>
              <Text style={{color: '#888', fontSize: 16}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

export default User;
