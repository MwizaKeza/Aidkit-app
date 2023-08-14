import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { saveUserData } from '../firebaseService';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation(); 
  const [userProfile, setUserProfile] = useState({
    fullName: '',
    surname: '',
    gender: '',
    dateOfBirth: '',
    allergies: '',
    asthma: '',
    diabetes: '',
    seizureDisorder: '',
    currentMedication: '',
    physicalImpairments: '',
    other: '',
  });

  useEffect(() => {
    // Fetch user data from AsyncStorage when the component mounts
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setUserProfile(userData);
        }
      } catch (error) {
        console.error('Error fetching user data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  const saveProfileData = async () => {
    /*const userId = auth.currentUser.uid;

    // Save updated user data to Firebase
    try {
      await saveUserData(userId, userProfile);
      console.log('User data saved to Firebase.');
    } catch (error) {
      console.error('Error saving user data to Firebase:', error);
    }*/

    // Save updated user data locally using AsyncStorage
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userProfile));
      console.log('User data saved locally.');
      ToastAndroid.show('Your information has been saved.', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error saving user data locally:', error);
    }
  };

  return (
    
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/imgs/right-arrow.png')} 
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>User Profile</Text>
      </View>
      
      <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={userProfile.fullName}
        onChangeText={(value) => setUserProfile({ ...userProfile, fullName: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={userProfile.surname}
        onChangeText={(value) => setUserProfile({ ...userProfile, surname: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={userProfile.gender}
        onChangeText={(value) => setUserProfile({ ...userProfile, gender: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={userProfile.dateOfBirth}
        onChangeText={(value) => setUserProfile({ ...userProfile, dateOfBirth: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Any Allergies? Please specify"
        value={userProfile.allergies}
        onChangeText={(value) => setUserProfile({ ...userProfile, allergies: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you have asthma? Y/N"
        value={userProfile.asthma}
        onChangeText={(value) => setUserProfile({ ...userProfile, asthma: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you have diabetes? Y/N. If Y then specify type"
        value={userProfile.diabetes}
        onChangeText={(value) => setUserProfile({ ...userProfile, diabetes: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you have a seizure disorder? Y/N"
        value={userProfile.seizureDisorder}
        onChangeText={(value) => setUserProfile({ ...userProfile, seizureDisorder: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="List current medication"
        value={userProfile.currentMedication}
        onChangeText={(value) => setUserProfile({ ...userProfile, currentMedication: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Physical Impairments"
        value={userProfile.physicalImpairments}
        onChangeText={(value) => setUserProfile({ ...userProfile, physicalImpairments: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Specify any other medical condition"
        value={userProfile.other}
        onChangeText={(value) => setUserProfile({ ...userProfile, other: value })}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveProfileData}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
   
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 14,
    marginLeft: 80,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#000080',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },

  backButton: {
    position: 'absolute',
    top: 38,
    left: 0,
    zIndex: 2,   

  },
  backButtonImage: {
    width: 17,
    height: 26,
    resizeMode: 'contain',
    
  },

  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 20,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  }

});

export default UserProfileScreen;

