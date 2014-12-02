define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        BlueThemeRouter = require( 'module/BlueTheme/Router' );
    
    return Marionette.Module.extend( {
         
        initialize: function() {
            // Assign the router
            this.Router = new BlueThemeRouter( );
        }
        
    } );
} );