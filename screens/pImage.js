function pImage(id){

    var imgLink = require('../assets/images/micheal_jackson.jpg')
    
    switch (id) {
        case 1:
            imgLink = require('../assets/images/tupac_shakur.jpg')
    
            break;
        
        case 2:

            imgLink = require('../assets/images/micheal_jackson.jpg')
            
            break;

        case 3:

            imgLink = require('../assets/images/drake.jpg')
                
        break;

        case 4:

            imgLink = require('../assets/images/adele.jpg')
                
        break;

        case 5:

            imgLink = require('../assets/images/rihanna.jpg')
                
        break;

        case 6:

            imgLink = require('../assets/images/the_weeknd.jpg')
                
        break;

        case 7:

            imgLink = require('../assets/images/eminem.jpg')
                
        break;

        case 8:

            imgLink = require('../assets/images/lilwayne.jpg')
                
        break;

        case 9:

            imgLink = require('../assets/images/beyonce.jpg')
                
        break;

        case 10:

            imgLink = require('../assets/images/taylorswift.jpg')
                
        break;
    
        default:
            break;
    }

    return imgLink
}


export default pImage