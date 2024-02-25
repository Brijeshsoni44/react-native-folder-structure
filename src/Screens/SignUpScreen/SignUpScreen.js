import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
  BackHandler
} from 'react-native';
import CommonHeader from '../../Components/CommonHeader';
import styles from './Styles';
import {TextInput} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {signupRequest} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader';
import * as AsyncStorage from '../../Utility/asyncStorage';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const SignUpScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const[confirmPassVisible, setConfirmPassVisible] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye-off');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);



  const clearTextInput = () =>{
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
 
  }

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
  
  const togglePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisible(!passwordVisible);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisible(!passwordVisible);
    }
  };


  const signupData = useSelector(state => state.app.signupData);
  const previousSignUpData = useRef({signupData}).current;


  const handleSignupAlert = () => {
    Alert.alert(
      'Success',
      'Registered successfully',
      [
        {
          text: '',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate('HomeScreen');
          },
        },
      ],
      {cancelable: false},
    );
  };


  useEffect(() => {
    if (previousSignUpData.signupData !== signupData) {
      try {
        if (signupData) {
          setLoader(false);
          const responseData = signupData.response;
          if (responseData.data.success) {
            AsyncStorage.setItem(AsyncStorage.TOKEN, responseData.data.token);
            AsyncStorage.setItem(
              AsyncStorage.USERDETAILS,
              responseData.data.data.userDetails,
            );
            clearTextInput();
            
            handleSignupAlert();
          } else {
            Alert.alert("Alert",responseData.data.message.error.email[0]);            
          }
        }
      } catch (error) {
        console.log('the err:', error);
        setLoader(false);
      }
    }
  }, [signupData]);

// date picker 
const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};
const handleConfirm = (dateOfBirt) => {
  const currentDate = new Date();
  if(isNaN(dateOfBirt) || dateOfBirt > currentDate){
    Alert.alert("Alert","Invalid Date of Birth");
  }else{
    setDateOfBirth(JSON.stringify(dateOfBirt).slice(1,11))
  }
  hideDatePicker();
};

  const handleSignUp = () => {
    setErrors({});
    const errors = {};
    if (!firstName.trim()) {
      Alert.alert("Alert", 'Please enter your first name');
      return;
      errors.firstName = 'Please enter your first name';
    }
    if (!lastName.trim()) {
      Alert.alert("Alert",'Please enter your last name');
      return;
      // errors.lastName = 'Please enter your last name';
    }
    // const dateOfBirthRegex =
    //   /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    // if (!dateOfBirth.trim() || !dateOfBirthRegex.test(dateOfBirth)) {
    //   Alert.alert("Alert",'Please enter a valid date of birth.');
    //   return;
    // }
   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email)) {
      Alert.alert("Alert",'Please enter a valid email address');
      return;
      //errors.email = 'Please enter a valid email address';
    }

    //phone valiadtion
    const pattern=/^(0|[+91]{3})?[7-9][0-9]{9}$/;

    //phone valiadtion
    if (!phone.trim() || !pattern.test(phone)) {
      Alert.alert("Alert",'Please enter valid phone number');
      return;

    }

    // Password validation
    if (!password.trim()) {
      Alert.alert("Alert", 'Please enter a password');
      return;
      //errors.password = 'Please enter a password';
    }
    // Confirm password validation
    if (password !== confirmPassword) {
      Alert.alert("Alert",'Passwords do not match');
      return;
      // errors.confirmPassword = 'Passwords do not match';
    }

    let requestBody = new FormData();
    requestBody.append('first_name', firstName);
    requestBody.append('last_name', lastName);
    requestBody.append('dob', dateOfBirth);
    requestBody.append('phone_number', phone);
    requestBody.append('email', email);
    requestBody.append('password', password);
    requestBody.append('password_confirmation', confirmPassword);
    setLoader(true);
    dispatch(signupRequest(requestBody));
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
        <StatusBar animated={true} backgroundColor="#217ec7" />
        <View style={styles.mainContainer}>
          <CommonHeader screenName={'SignUpScreen'} iconName={'arrow-left'} />
          <View style={styles.container}>
            {loader ? <Loader loader={loader} /> : null}

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginVertical: 10,
                }}>
                Signup
              </Text>
              {/* First Name */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="First Name"
                  style={styles.input}
                  value={firstName}
                  maxLength={10}
                  underlineColor="transparent"
                  onChangeText={text => {
                    setFirstName(text);
                  }}
                  error={!!errors.firstName}
                  underlineStyle={styles.underLineColor}
                />
                {errors.firstName && (
                  <Text style={styles.errorText}>{errors.firstName}</Text>
                )}
              </View>

              {/* Last Name */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Last Name"
                  style={styles.input}
                  value={lastName}
                  maxLength={10}
                  underlineColor="transparent"
                  onChangeText={text => {
                    setLastName(text);
                  }}
                  error={!!errors.lastName}
                  underlineStyle={styles.underLineColor}
                />
                {errors.lastName && (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                )}
              </View>

              {/* Date of Birth */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Date of Birth: YYYY-MM-DD"
                  style={styles.input}
                  underlineColor="transparent"
                  underlineStyle={styles.underLineColor}
                  value={dateOfBirth.toString()}
                  onChangeText={text => handleConfirm(text)}
                  editable={false}
                  error={!!errors.dateOfBirth}
                  right={
                    <TextInput.Icon
                      icon={"calendar-month"}
                      iconColor="gray"
                      size={24}
                      onPress={showDatePicker}
                    />
                  }
                 
                />
                {errors.dateOfBirth && (
                  <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
                )}

              </View>
           
              <View style={{flex:1, justifyContent:'center'}}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
              {/* Email */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  style={styles.input}
                  value={email}
                  underlineColor="transparent"
                  underlineStyle={styles.underLineColor}
                  onChangeText={setEmail}
                  error={!!errors.email}

                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              {/* Phone */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  style={styles.input}
                  underlineColor="transparent"
                  underlineStyle={styles.underLineColor}
                  value={phone}
                  onChangeText={setPhone}
                  error={!!errors.phone}
                />
                {errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                  style={styles.input}
                  value={password}
                  underlineColor="transparent"
                  onChangeText={setPassword}
                  underlineStyle={styles.underLineColor}
                  maxLength={16}
                  right={
                    <TextInput.Icon
                      icon={rightIcon}
                      iconColor="gray"
                      size={24}
                      onPress={togglePasswordVisibility}
                    />
                  }
                  error={!!errors.password}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              {/* Confirm Password */}
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Confirm Password"
                  maxLength={16}
                  secureTextEntry={!passwordVisible}
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  underlineStyle={styles.underLineColor}
                  underlineColor="transparent"
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>

              <View style={styles.button}>
                <LinearGradient
                  colors={['#1E88CF', '#2F51A1']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.linearGradientSignupBtn}>
                  <TouchableOpacity
                    onPress={text => {
                      handleSignUp(text);
                    }}>
                    <Text style={styles.buttonText}>SignUp</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.haveAccountContainer}>
                <Text style={styles.haveAcctTextTitle}>
                  Already Have An Account
                </Text>
                <Text style={styles.loginTitle}>Login</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUpScreen;
