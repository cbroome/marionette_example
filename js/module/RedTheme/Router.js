define( function( require ) {
    
    var Marionette = require( 'marionette' );
    
    return Marionette.AppRouter.extend( {
        appRoutes: {
            'red': 'catchAllRed'  
        }
    } );
    
} );