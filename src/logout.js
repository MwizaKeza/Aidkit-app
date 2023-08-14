import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
    const navigation = useNavigation(); // Initialize the navigation

    const onLogout = () => {
      auth.signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('SignIn'); // Navigate back to SignInScreen after logout
      });
    };

return (
    <View style={styles.logOutbtnContainer}>
     <TouchableOpacity style={styles.logOuttouch} onPress={onLogout}>
      <Image
        style={styles.logOutbtn}
        source={require('../assets/imgs/logoutIcon.png')}
      />
      </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
    logOuttouch: {
        position:'absolute',
        width: 65,
        height: 65,
        alignContent: 'center',
        justifyContent: 'center',
        right: 22,
        top: 498,
        borderRadius: 90,
        backgroundColor: '#A24857',
        paddingLeft: 15,
        
      },
    
      logOutbtn: {
        width: 35,
        height: 35,
      },
    
      logOutbtnContainer: {
        zIndex: 5,
      },
});

export default LogoutScreen;