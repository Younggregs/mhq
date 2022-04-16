import * as SQLite from 'expo-sqlite'
import updateQuotes from './updateQuotes'

const db = SQLite.openDatabase("db.db")

function updateInterest(interest, id){
  
    db.transaction(tx => {
        tx.executeSql("update artists set interested = ? where id = ? ", [interest, id]);
        });
   
    updateQuotes(interest, id)
}

    
export default updateInterest
