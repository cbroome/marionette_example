define( function( require ) {
    /**
     * This will be the generic router, used primarily to 
     * choose the proper module
     */
    var Marionette = require( 'marionette' );
    
    return Marionette.AppRouter.extend( {
        appRoutes: {
            
            'admin/*path': 'admin', 
            
            '': 'homePage'
            
        }
    } );
} );