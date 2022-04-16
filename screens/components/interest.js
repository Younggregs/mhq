import * as SQLite from 'expo-sqlite'
import artists_data from '../../assets/database/personas.json'


const db = SQLite.openDatabase("db.db")

function loadArtist(){

    db.transaction(tx => {
      tx.executeSql(
        "drop table artists;"
      );
    });
   
  
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists artists (id integer primary key not null, value int, artist text, interested int, position text );"
      );
    });
        magic_method()
    }
  
  

  function magic_method(){

  
    for(var object in artists_data){
      
      if(artists_data[object].data){
        var the_box = artists_data[object].data
        
            db.transaction(tx => {
  
              for(var item in the_box){

                var id = the_box[item].id
                var value = the_box[item].value
                //value = parseInt(value)

                var artist = the_box[item].artist
                var interested = 1
                var position = the_box[item].position

  
                tx.executeSql("insert into artists (id, value, artist, interested, position) values (?, ?, ?, ?, ?)", [id, value, artist, interested, position]);
            
              }
            });
             
      } 
    }
  }





function emptyResult(search_result){
    var empty_set = false
    if(search_result.length <= 0 ){
      empty_set = true
    }
    return empty_set
}


export default loadArtist
