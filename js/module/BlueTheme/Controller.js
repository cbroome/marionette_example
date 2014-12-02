define( function( require ) {

    var Marionette = require( 'marionette' ),
        HeaderView = require( 'module/BlueTheme/View/Header' ),
        DefaultView = require( 'module/BlueTheme/View/Default' ),
        KindOfBlueView = require( 'module/BlueTheme/View/KindOf' );
    
    return Marionette.Controller.extend( {
        
        appInstance: undefined,
        
        initialize: function() {
            this.appInstance = require( 'AppInstance' );
        },
        
        _updateHeader: function() {
              this.appInstance.regionHeader.show( HeaderView );
        },
        
        /**
         * default page for the blue module.
         */
        defaultBlue: function() {
            var defaultView = new DefaultView();
            AppInstance = require( 'AppInstance' ); 
            AppInstance.regionMain.show( defaultView );
        },
        
        
        /**
         * Page to demonstrate intramodule navigation
         */
        kindOfBlue: function() {
            var kindOfBlueView = new KindOfBlueView();
            AppInstance = require( 'AppInstance' ); 
            AppInstance.regionMain.show( kindOfBlueView );
        }
        
        
    } );
    
} );