import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Communications from 'react-native-communications';

const PhoneCallButton = ({ phoneNumber }) => {
  const handlePhoneCall = () => {
    Communications.phonecall(phoneNumber, true);
  };

  return (
    <View style={styles.phonebtnContainer}>
     <TouchableOpacity style={styles.phonetouch} onPress={handlePhoneCall}>
      <Image
        style={styles.phonebtn}
        source={require('../assets/imgs/contactIcon.png')}
      />
      </TouchableOpacity>
     </View>
  );
}; 
const styles = StyleSheet.create({
phonetouch: {
  position:'absolute',
  width: 80,
  height: 80,
  alignContent: 'center',
  justifyContent: 'center',
  right: 15,
  top: 575,
  borderRadius: 90,
  backgroundColor: '#800000',
  paddingLeft: 19,
  
},

phonebtn: {
  width: 40,
  height: 40,
},

phonebtnContainer: {
  zIndex: 1,
},

});

export default PhoneCallButton;
