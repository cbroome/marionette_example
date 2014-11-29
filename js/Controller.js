define( function( require ) {

    var Marionette = require( 'marionette' ),
        HomePageView = require( 'view/HomePage' );
    
    return Marionette.Controller.extend( {
        
        homePage: function() {
            var AppInstance = require( 'AppInstance' ),
                homePageView = new HomePageView( {} );
            
            // update the main section
            AppInstance.regionMain.show( homePageView );
        }
        
    } );
    
} );