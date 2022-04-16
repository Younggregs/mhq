import React, { Component } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { Container, Header, View, Text, Left, Body, Icon } from 'native-base';


export default class AboutScreen extends Component {


  render() {
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={{ backgroundColor: '#000' }}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer() }>
              <Icon name="menu" style={{ color: '#fff', fontSize: 40 }} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{ color: '#fff', fontSize: 20 }}>About</Text>
          </Body>
        </Header>
        <View>

        <View style={styles.topView}>
          <Text style={styles.titleText}>Music Heroes Quotes </Text>
          <Text style={styles.subText}> Version 0.0.1 </Text>
          {/*<Text style={styles.subText}>The latest version is already installed</Text>*/}
          
        </View>

        <View style={styles.bottomView}>
        <Text style={styles.buttonText}>A Gregs Production </Text>
          <TouchableOpacity style={styles.buttonView} onPress={() => Linking.openURL('https://www.disclaimergenerator.net/live.php?token=GPqX3XZVaITg6Wt4CeZ2xTQ3LHdTnk3U')}>
            <Text style={styles.buttonText}>Disclaimer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView} onPress={() => Linking.openURL('https://www.privacypolicygenerator.info/live.php?token=5CQ8m8C76y30AW35DovGGm6F3ZarwYz5')}>
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        </View>
      </Container>
    );
  }
}


const styles = ({
  bg: {
    backgroundColor: '#424040'
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  titleText: {
    color: 'whitesmoke',
    fontSize: 25,
    fontWeight: 'bold'
  },
  subText: {
    color: 'gray',
    fontSize: 15,
  },
  buttonView: {
    backgroundColor: '#2F2F31',
    margin: 5,
    borderRadius: 20,
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0
  },
  topView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})