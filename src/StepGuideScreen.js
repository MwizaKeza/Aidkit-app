import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import firstAidData from './firstAidData';
import PhoneCallButton from '../components/PhoneCallButton';
import LogoutScreen from '../src/logout.js';

const StepGuideScreen = ({ navigation }) => {
  
  const navigateToStepDetail = (step) => {
    navigation.navigate('StepDetail', { step });
  };
  

  return (
    
    <View style={styles.background}>
    {/* Header with Welcome Message and User Profile Icon */}
    <View style={styles.welcomeMsg}>
      <Text style={styles.welcometxt}>Welcome</Text>
      <TouchableOpacity style={{ paddingTop: 40, }} onPress={() => navigation.navigate('UserProfile')}>
        <Image
        style={{ width: 50, height: 50,}}
        source={require('../assets/imgs/user.png')}
        />
      </TouchableOpacity>
     </View>
     
      <LogoutScreen/>
      <PhoneCallButton phoneNumber="112" />
     
    
      <FlatList
        data={firstAidData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.stepContainer}
            onPress={() => navigateToStepDetail(item)}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.stepTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    padding: 16,
  },

  stepContainer: {
    paddingTop: 4,
    paddingRight: 3,
    paddingLeft: 3,
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginBottom: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    borderRadius: 7,
    backgroundColor: '#e6eeff',
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    
  },
  welcomeMsg: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15,
    backgroundColor: '#000080',
  },

  welcometxt: {
    fontSize: 27,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 40,
    
  }
  
});


export default StepGuideScreen;

