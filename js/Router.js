define( function( require ) {
    /**
     * This will be the generic router, used primarily to 
     * choose the proper module
     */
    var Marionette = require( 'marionette' ),
        HeaderView = require( 'view/Header' ),
        AppInstance;
    
    return Marionette.AppRouter.extend( {
        
        /**
         * @property    {Object}    appRoutes   Note that the module routes are not
         *                                      included. Marionette will handle building
         *                                      the global route table
         */
        appRoutes: {
            
            // the *path is a special formulation that will match any string
            '*path': 'homePage'
            
        },
        
        onRoute: function() {
            AppInstance = require( 'AppInstance' );
            AppInstance.regionHeader.show( new HeaderView() );
        }
        
    } );
} );