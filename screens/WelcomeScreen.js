import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Spinner } from 'native-base'
import * as SQLite from 'expo-sqlite'
import loadArtist from './components/interest'
import quote_data from '../assets/database/quotes.json'
import { _storeScreenState } from './components/data/store'

const db = SQLite.openDatabase("db.db")


export default class WelcomeScreen extends Component {

    state = {
        show: false
    }

    async UNSAFE_componentWillMount(){

      await _storeScreenState()

        setTimeout( () => {
            this.setState({ show: true})
          }, 4000)


    loadArtist()

    db.transaction(tx => {
      tx.executeSql(
        "drop table quotes;"
      );
    });
   
  
    db.transaction(tx => {
        tx.executeSql(
          "create table if not exists quotes (id integer primary key not null, name int, song int, quote text, interested int default 1 );"
        );
    });
    
    
      this.magic_method()

    }





    magic_method(){

    
  
        for(var object in quote_data){
          
          if(quote_data[object].data){
            var the_box = quote_data[object].data
      
            
                db.transaction(tx => {
      
                  for(var item in the_box){
      
                    var id = the_box[item].id
                    var name = the_box[item].name
                    var song = the_box[item].song
                    var quote = the_box[item].quote
      
                    tx.executeSql("insert into quotes (id, name, song, quote) values (?, ?, ?, ?)", [id, name, song, quote]);
                
                  }
                });
                 
          } 
        }
      }
    

  render() {
    return (
        <View style={{ backgroundColor: '#282C35', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{ marginBottom: 20}}>
                <Text style={styles.text}>Welcome to MHQ</Text>
            </View>
            

        {this.state.show ? (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.push('ArtistStack')}>
                <Text style={styles.text}>Lets Go!</Text>
            </TouchableOpacity>
        ) : (
            <View>
                <Spinner color='#2f95dc' />
                <Text style={styles.spinnerText}>Preparing your studio</Text>
            </View>
            
        )}

        <View style={styles.signature}>
            <Text style={styles.signatureText}>A Gregs Production</Text>
        </View>
           
        </View>
        
    );
  }
}


const styles = ({
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  buttonStyle: {
      height: 50,
      width: 200,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2f95dc'
  },
  signature: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  signatureText: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  spinnerText: {
      color: 'whitesmoke',
      fontWeight: 'bold',
      fontSize: 13,
      textAlign: 'center'
  }
})