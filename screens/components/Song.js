import data from '../../assets/database/songs'

function song(id){
    var song = '___'
    for(var object in data){
        if(data[object].id == id){
            song = data[object].song
        }
    }

    return song
}

export default song;