import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Screens/SplashScreen/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CommonHeader = ({screenName, props, iconName}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#217ec7', '#2d57a6']}>
      <View style={Styles.mainContainer}>
        {screenName !== undefined && screenName === 'Welcome' ? (
          <View>
            <Text>{'     '}</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <MaterialCommunityIcons name={iconName} size={35} color={'#fff'} />
          </TouchableOpacity>
        )}
       </View>
    </LinearGradient>
  );
};

const Styles = StyleSheet.create({
  logoImg: {
    height: 65,
    width: 85,
    // alignSelf: 'center', // To center horizontally
  },

 
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    // Add any styles you want for the back button
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    // Add any styles you want for the back button text
  },
});

export default CommonHeader;
