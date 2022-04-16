import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body, Icon } from 'native-base';
import * as SQLite from 'expo-sqlite'
import quote_data from '../assets/database/quotes.json'
import SharePopup from './components/Share'
import billionaire from './components/Personas'
import field from './components/Field'
import song from './components/Song'
import pImage from './pImage'
import AdBoard from './components/adBoard'


const db = SQLite.openDatabase("db.db")

export default class HomeScreen extends Component {

  state = {
    search_result: [],
  }


  async UNSAFE_componentWillMount(){

      this.setState({ isLoading: true })

      db.transaction(tx => {
        tx.executeSql("select * from quotes where interested = 1 order by random() limit 250 ", [], (_, { rows }) =>
        this.setState({ search_result: rows._array })
        );
      });

      this.setState({ isLoading: false })

   
  }




  emptyResult(){
    var empty_set = false
    if(this.state.search_result.length <= 0 ){
      empty_set = true
    }
    return empty_set
  }

  makeThread(quote, name){
    return quote + '\n --' + name
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#2F2F31' }}>
        <Header style={{ backgroundColor: '#272626' }}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer() }>
              <Icon name="menu" style={{ color: '#fff', fontSize: 40 }} />
            </TouchableOpacity>
          </Left>
          <Body>
          <Text style={{ color: '#fff', fontSize: 20 }}>Music Heroes Quotes</Text>
          </Body>
        </Header>
        {this.state.isLoading ? (
            <View style={styles.loading}>
                <Text style={{ color: '#fff', textAlign: 'center'}}>is loading</Text>
            </View>
            ) : (
            <View>

          {this.emptyResult() ? (
            <View style={styles.loading}>
                <Text style={{ color: '#fff', textAlign: 'center'}}>loading...</Text>
            </View>
          ) : (

          <View>
          <DeckSwiper
            dataSource={this.state.search_result}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem style={{ backgroundColor: '#424040' }}>
                  <Left>
                    <Thumbnail source={pImage(item.name)} />
                    <Body>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>{billionaire(item.name)}</Text>
                      <Text style={{ color: '#fff', fontSize: 12 }} note>{field(item.name)}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <View style={{ width: '100%', minHeight: 300, maxHeight: 500, justifyContent: 'center', alignItems: 'center', backgroundColor: '#424040', padding: 10 }}>
                  
                  <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
                  <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 25, lineHeight: 40 }}>
                    {item.quote}
                  </Text>
                  </ScrollView>

                  </View>
                </CardItem>
                <CardItem style={{ backgroundColor: '#424040' }}>
                  <Left>
                    <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }}>Track: {song(item.song)}</Text>
                  </Left>
                  <Right>
                    <SharePopup title={billionaire(item.name)} thread={this.makeThread(item.quote, billionaire(item.name))} />
                  </Right>
                </CardItem>
              </Card>
            }
          />
        </View>

            )}
          </View>
        )}

        <View style={styles.adStyle}>
          <AdBoard />
        </View>
      </Container>
    );
  }
}


const styles = ({
  bg: {
    backgroundColor: '#424040'
  },
  adStyle: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center', 
    justifyContent: 'center'
  }
})