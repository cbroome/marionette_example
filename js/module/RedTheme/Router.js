define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        RedThemeController = require( 'module/RedTheme/Controller' );
    
    return Marionette.AppRouter.extend( {
        
        /**
         * @property    {Object}    appRoutes
         */
        appRoutes: {
            'red': 'catchAllRed'  
        },
        
        /**
         * 
         * @returns {Marionette.Controller}
         */
        _getController: function() {
            return new RedThemeController();
        }
    } );
    
} );