import data from '../../assets/database/personas2'

function artist(id){
    var person = 'Invalid'
    for(var object in data){
        if(data[object].id == id){
            person = data[object].artist
        }
    }

    return person
}

export default artist;