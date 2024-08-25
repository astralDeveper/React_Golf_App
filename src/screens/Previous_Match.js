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
  import {Dummy} from './Dummy';
  import {Arrow} from '../assets';
  import DatePicker from 'react-native-date-picker';
  
  const Previous_Match = ({navigation, route}) => {
    const [dateVisible, setDateVisible] = useState(false);
    const [dateData, setDateData] = useState(new Date()); // Initialize with a Date object
    const {data} = route.params;
  
    const DatePress = () => {
      setDateVisible(true);
    };
  
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Match_Detail',{data:data});
          }}
          style={styles.listItem}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.itemInfo}>
              <View style={styles.dateTimeContainer}>
                <Image source={require('../assets/calender.png')} />
                <Text style={styles.itemText}>{item.date}</Text>
              </View>
              <View style={styles.dateTimeContainer}>
                <Image source={require('../assets/clock.png')} />
                <Text style={styles.itemText}>{item.time}</Text>
              </View>
            </View>
          </View>
          <Arrow />
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.iconButton}>
            <Image source={require('../assets/Back.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Previous Match</Text>
          <Image
            source={require('../assets/Small_Logo.png')}
            style={styles.logo}
          />
        </View>
        {data === 'admin' && (
          <TouchableOpacity
            onPress={DatePress}
            style={styles.dateButton}>
            <Image source={require('../assets/tools.png')} />
          </TouchableOpacity>
        )}
        <ScrollView>
          <FlatList data={Dummy} renderItem={renderItem} />
        </ScrollView>
        <Modal transparent={true} visible={dateVisible} animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <DatePicker
                date={dateData} // Pass a Date object here
                onDateChange={setDateData} // Update the state with the selected date
                mode="date"
                style={styles.datePicker}
              />
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => setDateVisible(false)}>
                <Text style={styles.doneButtonText}>Done</Text>
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
    listItem: {
      backgroundColor: '#425252',
      width: width * 0.9,
      padding: 13,
      borderWidth: 2,
      borderColor: '#ACC49F',
      elevation: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 20,
      alignSelf: 'center',
    },
    itemName: {
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      width: width * 0.5,
    },
    itemInfo: {
      flexDirection: 'row',
      width: width * 0.5,
      justifyContent: 'space-between',
      marginTop: 20,
    },
    dateTimeContainer: {
      width: width * 0.26,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemText: {
      color: '#FFF',
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
    },
    dateButton: {
      margin: 10,
      alignSelf: 'flex-end',
      backgroundColor: '#ACC49F',
      padding: 10,
      borderRadius: 10,
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingVertical: 20,
      alignItems: 'center',
    },
    datePicker: {
      backgroundColor: '#fff',
    },
    doneButton: {
      padding: 10,
      borderWidth: 2,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 10,
    },
    doneButtonText: {
      fontSize: 18,
      color: '#000',
    },
  });
  
  export default Previous_Match;
  