import firestore from '@react-native-firebase/firestore';

export const saveUserData = (userId, userData) => {
  return firestore()
    .collection('users')
    .doc(userId)
    .set(userData);
};
