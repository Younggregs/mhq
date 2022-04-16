import data from '../../assets/database/personas2'

function field(id){
    var position = 'Invalid'
    for(var object in data){
        if(data[object].id == id){
            position = data[object].position
        }
    }

    return position
}

export default field;