import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  Modal,
  ScrollView,
  BackHandler,
} from 'react-native';
import CommonHeader from '../../Components/CommonHeader';
import styles from './Styles';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {loginRequest} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import * as AsyncStorage from '../../Utility/asyncStorage';

const LoginScreen = ({navigation, props}) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loader, setLoader] = useState(false);
  const loginData = useSelector(state => state.app.loginData);
  const previousloginData = useRef({loginData}).current;
  //passsword visible
  const [rightIcon, setRightIcon] = useState('eye-off');

  const clearTextInput = () => {
    setEmail('');
    setPassword('');
    setRememberMe('');
  };

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  useEffect(() => {
    if (previousloginData?.loginData !== loginData) {
      setLoader(false);
      if (loginData?.response?.data?.success) {
        AsyncStorage.setItem(
          AsyncStorage.TOKEN,
          loginData?.response?.data?.token,
        );
        AsyncStorage.setItem(
          AsyncStorage.USERDETAILS,
          loginData.response.data.data.userDetails,
        );
        clearTextInput();
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Alert', loginData?.response?.data?.message?.error);
        // setLoader(false);
      }
      // }
    }
  }, [loginData]);

  const togglePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisible(!passwordVisible);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisible(!passwordVisible);
    }
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email)) {
      Alert.alert('Alert', 'Please enter a valid email address');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Alert', 'Please enter a password');
      return;
    }
    if (!rememberMe) {
      Alert.alert('Alert', 'Please check the Terms and Conditions');
      return;
    }

    let requestBody = new FormData();
    requestBody.append('email', email);
    requestBody.append('password', password);
    dispatch(loginRequest(requestBody));
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
        <View style={styles.mainContainer}>
          <StatusBar animated={true} backgroundColor="#2f53a2" />
          <CommonHeader screenName={'Login'} iconName={'arrow-left'} />
          <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {loader ? <Loader loader={loader} /> : null}
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Login
              </Text>
              <View style={styles.subContainer}>
                {/* Email Address */}
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Email Address"
                    keyboardType="email-address"
                    style={styles.input}
                    underlineColor="transparent"
                    underlineStyle={styles.underLineColor}
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />
                </View>
                {/* Password */}
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    underlineColor="transparent"
                    underlineStyle={styles.underLineColor}
                    style={styles.input}
                    value={password}
                    maxLength={16}
                    onChangeText={text => setPassword(text)}
                    right={
                      <TextInput.Icon
                        icon={rightIcon}
                        // icon={togglePasswordVisibility ? console.log("on") : console.log("off")}
                        iconColor="gray"
                        size={24}
                        onPress={togglePasswordVisibility}
                      />
                    }
                  />
                </View>

                {/* Remember Me Button */}
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    margin: 8,
                  }}>
                  <View>
                    <TouchableOpacity
                      style={styles.rememberMeButton}
                      onPress={toggleRememberMe}>
                      <MaterialCommunityIcons
                        size={24}
                        color={'gray'}
                        name={
                          rememberMe
                            ? 'checkbox-marked'
                            : 'checkbox-blank-outline'
                        }
                      />
                      <Text style={styles.rememberMeButtonText}>
                        Terms and Condition Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.rememberMeButton}
                      onPress={() => setIsModalVisible(true)}>
                      <Text style={styles.forgotPasswordText}>
                        Forgot Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.button}>
                <LinearGradient
                  colors={['#1E88CF', '#2F51A1']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.linearGradientSignupBtn}>
                  <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 18,
                  top: 30,
                }}>
                <View
                  style={{height: 2, backgroundColor: 'gray', flex: 1}}></View>
                <Text
                  style={{
                    textAlign: 'center',
                    margin: 6,
                    bottom: 15,
                    color: '#2A2A2A',
                  }}>
                  OR
                </Text>
                <View
                  style={{height: 2, backgroundColor: 'gray', flex: 1}}></View>
              </View>

              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 15,
                  color: '#000',
                  fontSize: 14,
                }}>
                {' '}
                Login with any of the social platform
              </Text>

              <View
                style={{
                  // top: 30,
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '60%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/images/fb.png')}
                    style={{height: 34, width: 34, borderRadius: 17}}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/images/google.png')}
                    style={{height: 34, width: 34, borderRadius: 17}}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/images/insta.png')}
                    style={{height: 34, width: 34, borderRadius: 17}}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <View style={styles.notHaveAccountContainer}>
                  <Text style={styles.notHaveAcctTextTitle}>
                    Don't Have An Account
                  </Text>
                  <Text style={styles.signUpTitle}>Signup</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.congratsImgContainer}>
          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalMailContainer}>
              <View style={styles.modalSubContainer}>
                <TouchableOpacity
                  style={styles.modalClose}
                  onPress={() => setIsModalVisible(false)}>
                  <Image
                    source={require('../../Assets/images/close_icon.png')}
                    style={styles.modalCloseImg}
                  />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.modalContainer}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 24,
                      }}>
                      Forgot Password
                    </Text>
                    <View style={styles.modalEmailView}>
                      {/* Email Address */}
                      <View style={styles.modalInputContainer}>
                        <TextInput
                          placeholder="Email Address"
                          keyboardType="email-address"
                          style={styles.input}
                          underlineColor="transparent"
                          underlineStyle={{backgroundColor: '#f3f3f3'}}
                          value={email}
                          onChangeText={text => setEmail(text)}
                        />
                      </View>
                    </View>

                    <View style={styles.modalButton}>
                      <LinearGradient
                        colors={['#1E88CF', '#2F51A1']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.linearGradientSignupBtn}>
                        <TouchableOpacity
                        // onPress={handleForgotPassword}
                        >
                          <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
