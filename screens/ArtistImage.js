import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Thumbnail, Text } from 'native-base';
import pImage from './pImage';
import updateInterest from './components/updateInterest'

export default class ArtistImage extends Component {

    state = {
        interested: null
    }

    UNSAFE_componentWillMount(){

        if(this.props.interested === 1){
            this.setState({ interested: true })
        }else{
            this.setState({ interested: false })
        }
        
    }

    onChange(id){
        if(this.state.interested){
            this.setState({ interested: false })
            updateInterest(0, id )
        }else{
            this.setState({ interested: true })
            updateInterest(1, id )
        } 
    }


  render() {
    return (
        <View>
            {this.state.interested ? (
            <TouchableOpacity style={styles.theBoxSelected} onPress={() => this.onChange(this.props.id)}>
                <Thumbnail source={pImage(parseInt(this.props.id))} style={styles.selectImage}/>
                <Text style={styles.text}>{this.props.artist}</Text>
            </TouchableOpacity>  
            ) : (
            <TouchableOpacity style={styles.theBox} onPress={() => this.onChange(this.props.id)}>
                <Thumbnail source={pImage(parseInt(this.props.id))} style={styles.selectImage}/>
                <Text style={styles.text}>{this.props.artist}</Text>
            </TouchableOpacity>  
            )}
        </View>
        
    );
  }
}


const styles = ({
  selectImage: {
    height: 180, 
    width: 180, 
  },
  theBox: {
    height: 210,
    width: 180,
    margin: 5,
    backgroundColor: '#424040',
  },
  theBoxSelected: {
    height: 210,
    width: 180,
    margin: 5,
    backgroundColor: '#2f95dc',
  },
  imageBox: {
    flexDirection: "row",
    overflow: "scroll", 
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: 'center',
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
})