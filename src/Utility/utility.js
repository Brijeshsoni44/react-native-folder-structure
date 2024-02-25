/* eslint-disable prettier/prettier */
/* eslint-disable radix */
import { Alert } from 'react-native';
// show message alert
export function showMessage(isError = false, message) {
    Alert.alert(
        isError ? 'Alert' : 'Success',
        message,
        [{ text: 'Ok', style: 'cancel' }],
        { cancelable: false },
    );
}

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
