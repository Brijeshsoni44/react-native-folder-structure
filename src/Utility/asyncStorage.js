/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN = 'TOKEN';
export const USERDETAILS = 'USERDETAILS';

// Method for set the item on storage
export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log('setItem', error);
    }
};

// Method for get the Item on storage
export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // console.log("value", value)
            return value;
        } else {
            return null;
        }

    } catch (error) {
        console.log('getItem', error);
    }
};
// Method for remove the Item from storage
export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (exception) {
        console.log('removeItem', exception);
        return false;
    }
};
