define( function( require ) {

    var Marionette = require( 'marionette' ),
        DefaultView = require( 'module/RedTheme/View/Default' ),
        AppInstance;
    
    return Marionette.Controller.extend( {
        
        
        /**
         * default page for the red module.
         * 
         */
        catchAllRed: function() {
            var defaultView = new DefaultView();
            AppInstance = require( 'AppInstance' );
            
            // Note that defaultView's 'render' was not called beforehand
            AppInstance.regionMain.show( defaultView );
        }
        
    } );
    
} );