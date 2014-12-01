define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        BlueThemeController = require( 'module/BlueTheme/Controller' );
    
    return Marionette.AppRouter.extend( {
        appRoutes: function() {
            return {
                'blue': 'defaultBlue'  
            };
        },
        
        /**
         * 
         * @returns {Marionette.Controller}
         */
        _getController: function() {
            return new BlueThemeController();
        }
    } );
    
} );