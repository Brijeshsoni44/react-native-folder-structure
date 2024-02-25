import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2f53a2',
  },
  
  container: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:10,
    marginRight:10,
    //margin: 15,
    //marginTop: 5,
    marginBottom: 30,
  },

  input: {
    fontSize: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    height: 45,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  button: {
    margin: 10,
    borderRadius: 10,
    borderColor: '#2b88d8',
    justifyContent: 'center',
  },
  linearGradientSignupBtn: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAcctTextTitle: {
    fontSize: 18,
    fontFamily: 'bold',
    fontWeight: '800',
    color:'#2A2A2A'
  },
  loginTitle: {
    fontSize: 18,
    fontFamily: 'bold',
    left: 5,
    textDecorationLine: 'underline',
    color: '#2f53a2',
    fontWeight: '800',
  },

  inputContainer: {
    margin: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    left: 5,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#217ec7',
  },
  underLineColor:{
    backgroundColor: 'white'
   },
   container2: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
export default styles;
