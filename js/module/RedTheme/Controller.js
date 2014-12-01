define( function( require ) {

    var Marionette = require( 'marionette' );
    
    return Marionette.Controller.extend( {
        
        catchAllRed: function() {
            
            console.log( 'hello red' );
            
        }
        
    } );
    
} );