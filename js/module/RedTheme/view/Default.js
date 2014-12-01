define( function( require ) {
    
    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        render: function() {
            
            this.$el.append( '<h2>Red Module Default Page</h2>' );
            
            return this;
        }
        
    } );
    
} );