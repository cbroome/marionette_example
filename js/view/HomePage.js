define( function( require ) {

    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        className: 'home-page-view',
        
        render: function() {
            
            this.$el.append( 'This is the home page view' );
            return this;
        }
        
    } );
    
} );