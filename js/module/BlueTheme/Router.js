define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        BlueThemeController = require( 'module/BlueTheme/Controller' );
    
    return Marionette.AppRouter.extend( {
        appRoutes: {
            // defaultBlue is a method defined in BlueThemeController
            'blue': 'defaultBlue',
            
            'blue/kindof': 'kindOfBlue'
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