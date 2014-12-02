define( function( require ) {
    /**
     * Header for the main application
     */
    
    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        /**
         * @property    {String}    tagName
         */
        tagName: 'h1',
        
        /**
         * 
         * @chainable
         * @returns {Backbone.View}
         */
        render: function() {
            this.$el.append( 'Marionette Application Example' );
            return this;
        }
    } );
} );