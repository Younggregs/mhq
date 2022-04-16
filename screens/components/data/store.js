import { AsyncStorage } from "react-native"

export async function _storeScreenState () {
  v = 't'

  try {
    await AsyncStorage.setItem('screen_state', v );
    
  } catch (e) {
    console.log(e)
  }
}


export async function _clearScreenState () {
  try {
    await AsyncStorage.removeItem('screen_state');
    return true
  } catch (e) {
    console.log(e)
  }

  return false
}




export async function _retrieveData ( key ) {
  try {
    
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
      
    }
  } catch (e) {
    console.log(e)
  }
  return false
}





