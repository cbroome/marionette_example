define( function( require ) {

    var Marionette = require( 'marionette' ),
        DefaultView = require( 'module/BlueTheme/View/Default' ),
        KindOfBlueView = require( 'module/BlueTheme/View/KindOf' );
    
    return Marionette.Controller.extend( {
        
        /**
         * @property    {Marionette.Application}    appInstance
         */
        appInstance: undefined,
        
        initialize: function() {
            // An example of giving the class an instance of the 
            // instantiated application
            this.appInstance = require( 'AppInstance' );
        },
        
        /**
         * default page for the blue module.
         */
        defaultBlue: function() {
            var defaultView = new DefaultView();
            this.appInstance.regionMain.show( defaultView );
        },
        
        
        /**
         * Page to demonstrate intramodule navigation
         */
        kindOfBlue: function() {
            var kindOfBlueView = new KindOfBlueView();
            this.appInstance.regionMain.show( kindOfBlueView );
        }
        
        
    } );
    
} );