define( function( require ) {

    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        /**
         * @property    {String}    tagName
         */
        tagName: 'h1',
        
        render: function() {
            this.$el.append( 'Red Module' );
            return this;
        }
        
    } );
    
} );