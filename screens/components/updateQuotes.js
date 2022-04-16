import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("db.db")

function updateQuotes(interest, id){
  
    db.transaction(tx => {
        tx.executeSql("update quotes set interested = ? where name = ? ", [interest, id]);
        });
}

    
export default updateQuotes
