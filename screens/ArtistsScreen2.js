import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, View, Text, Left, Body, Icon, Fab } from 'native-base';
import ArtistImage from './ArtistImage'
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("db.db")

export default class ArtistsScreen2 extends Component {

  state = {
    search_result: []
  }

  UNSAFE_componentWillMount(){
    this.setState({ isLoading: true })
      db.transaction(tx => {
        tx.executeSql("select * from artists", [], (_, { rows }) =>
        this.setState({ search_result: rows._array })
        );
      });
      this.setState({ isLoading: false })
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#2F2F31' }}>
        <Header style={{ backgroundColor: '#272626' }}>
          <Body>
            <Text style={{ color: '#fff', fontSize: 20 }}>Artists</Text>
          </Body>
        </Header>
        <View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>Select Artists to get quotes from, then Go!</Text>
        </View>

        <View>
          <Fab
            active={this.state.active}
            style={{ backgroundColor: '#2f95dc' }}
            position="bottomRight"
            onPress={() => this.props.navigation.push('HomeStack')}>
            <Text>Go</Text>
          </Fab>
        </View>

        <ScrollView>
        <View style={styles.imageBox}>
          {this.state.search_result.map(item =>
            <ArtistImage id={item.id} artist={item.artist} interested={item.interested}/>
          )}
        </View>
        </ScrollView>
        

        </View>

        
      </Container>
    );
  }
}


const styles = ({
  bg: {
    backgroundColor: '#424040'
  },
  titleText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },
  titleView: {
    margin: 10
  },
  selectImage: {
    height: 180, 
    width: 180, 
  },
  imageBox: {
    flexDirection: "row",
    overflow: "scroll", 
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 150
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
})