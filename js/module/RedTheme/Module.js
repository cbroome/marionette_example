define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        RedThemeRouter = require( 'module/RedTheme/Router' ),
        RedThemeController = require( 'module/RedTheme/Controller' );
    
    return Marionette.Module.extend( {
 
        initialize: function() {
            // Assign the router and controller
            this.Router = new RedThemeRouter( { controller: new RedThemeController() } );
        }
        
    } );
} );