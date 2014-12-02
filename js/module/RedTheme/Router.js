define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        RedThemeHeaderView = require( 'module/RedTheme/View/Header' ),
        RedThemeController = require( 'module/RedTheme/Controller' ),
        AppInstace;
    
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
        },
        
        onRoute: function() {
            AppInstace = require( 'AppInstance' );
            AppInstace.regionHeader.show( new RedThemeHeaderView() );
        }
    } );
    
} );