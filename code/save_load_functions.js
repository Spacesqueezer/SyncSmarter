import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  console.log(value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Data saved successfully");
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  console.log(key);
  try {
    const value = await AsyncStorage.getItem(key);
    console.log("валью", value);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // error clearing storage
  }
};

export { storeData, getData, clearStorage };
