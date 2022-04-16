import React from 'react';
import { _retrieveData } from './components/data/store'
import { View } from 'react-native';

export default class FenceScreen extends React.Component {

  async UNSAFE_componentWillMount(){

    const screen_state = await _retrieveData('screen_state_')

    if(screen_state === 't'){
      this.props.navigation.navigate('HomeStack')
    }else{
        this.props.navigation.navigate('Welcome')
    }
     
  }

  render(){
    return(
        <View></View>
    )
  }

}