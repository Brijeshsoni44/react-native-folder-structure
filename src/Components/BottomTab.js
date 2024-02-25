import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Screens/SplashScreen/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const BottomTab = ({headerText, imageSource, iconName, color, props}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          style={{width: 35, height: 35}}
          resizeMode="contain"
          source={require('../Assets/images/user.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CongratulationsScreen')}>
        <Image
          style={{width: 50, height: 40}}
          resizeMode="contain"
          source={require('../Assets/images/ticket_icon_black.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.navigate('ReferFriendScreen')}
       >
        <Image
          style={{width: 35, height: 35}}
          resizeMode="contain"
          source={require('../Assets/images/user_plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default BottomTab;
