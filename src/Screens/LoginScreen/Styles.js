

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
    backgroundColor: '#2f53a2',
  },
  container: {
    backgroundColor: '#fff',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    height:'75%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    //margin:15,
    //flex: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    // height: '75%',
     borderBottomLeftRadius: 20,
     borderBottomRightRadius: 20,
     marginLeft:10,
     marginRight:10
     
    // margin: 15,
  },
  subContainer: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    top: 40,
  },
  modalEmailView: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // top: 20,
  },
  input: {
    fontSize: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    height: 45,
    paddingLeft: 2,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
underLineColor:{
 backgroundColor: 'white'
},
  button: {
    // height: 50,
    top: 30,
    // margin: 14,
    borderRadius: 10,
    borderColor: '#2b88d8',
    // borderWidth: 2,
    // backgroundColor: '#2F51A1',
    justifyContent: 'center',
    margin:10,
    marginVertical:20,
  },
  modalButton:{
    // height: 50,
    // top: 30,
    // margin: 14,
    borderRadius: 10,
    borderColor: '#2b88d8',
    // borderWidth: 2,
    // backgroundColor: '#2F51A1',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  notHaveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom: 30,
    backgroundColor: 'white',
  },
  notHaveAcctTextTitle: {
    fontSize: 15,
    fontFamily: 'normal',
    fontWeight: 'normal',
    color:'#2A2A2A'
  },
  signUpTitle: {
    fontSize: 15,
    fontFamily: 'bold',
    left: 5,
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: 'normal',
  },
  inputContainer: {
    margin: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    //  marginBottom: 15,
    // borderBottomWidth: 1,
  },
  modalInputContainer: {
    marginVertical: 15,
  },
  passwordVisibilityIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -12}],
  },
  passwordIcon: {
    fontSize: 12,
    color: '#555',
  },

  rememberMeButtonText: {
    fontSize: 10,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 10,
    color: '#025dab',
    top: 4,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 15,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxInner: {
    width: 15,
    height: 15,
    borderRadius: 6,
  },
  linearGradientSignupBtn: {
    height: 50,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  safeAreaContainer: {
    //flex:1,
    backgroundColor: '#217ec7',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    left: 5,
    //backgroundColor:'green'
  },

  congratsImgContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
  },
  modalMailContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    //flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 15,
    //marginHorizontal:15
    
  },
  modalSubContainer: {
    //height: '40%',
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   
  },
  modalClose:{
    padding:10,
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop:5
  },
  modalCloseImg: {
    height: 12,
    width: 12,    
  },
  
});
export default styles;

