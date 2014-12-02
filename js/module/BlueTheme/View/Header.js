define( function( require ) {

    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        render: function() {
            this.$el.append( 'Blue Theme Module' );
            return this;
        } 
        
    } );
    
} );