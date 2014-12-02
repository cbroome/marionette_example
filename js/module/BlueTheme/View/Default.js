define( function( require ) {
    
    var Backbone = require( 'backbone' ),
        AppInstance;
    
    return Backbone.View.extend( {
        
        /**
         * @returns {Object}
         */
        events: function() {
            return { 
                'click a': 'onLinkClick'     
            };
        },
        
        /**
         * 
         * @chainable
         * @returns {Backbone.View}
         */
        render: function() {
            this.$el.append( '<h2>Blue Theme</h2>' );
            
            this.$el.append( '<div><a href="#blue/kindofblue">Kind of Blue</a></div>' );
            
            return this;   
        },
        
        onLinkClick: function() {
            
            AppInstance = require( 'AppInstance' );
            
            AppInstance.Router.navigate( '#blue/kindof', { trigger: true } ); 
            
            // Returning false kills the jQuery event
            return false;
        }
        
    } );
    
} );