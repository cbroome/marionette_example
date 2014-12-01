define( function( require ) {
    /**
     *  This view will draw the nav menu...
     */
    
    var Backbone = require( 'backbone' ),
        _ = require( 'underscore' ),
        AppInstance;
    
    return Backbone.View.extend( {
        
        /**
         * @property    {String}    nav     this will be a nav element
         */
        tagName: 'ul',

        /**
         * 
         * @returns {Object}
         */
        events: function() {
            return {
                'click a': 'onAnchorClick'
            }
        },
        
        /**
         * @chainable
         * @returns {Backbone.View}
         */
        render: function() {
            
            var template = _.template( '<li><a href="<%= url %>"><%= label %></a></li>' ),
                links = [
                    { url: '#', label: 'Home' },
                    { url: '#red', label: 'Red Module' },
                    { url: '#blue', label: 'Blue Module' }
                ];
            
            _.each( 
                links,
                function( link ) {
                    this.$el.append( template( link ) );
                },
                this
            );
            
            return this;
        },
        
        
        /**
         * 
         * @param   {Event} event
         * @returns {Boolean}
         */
        onAnchorClick: function( event ) {
            // May not be compatible with older IE versions
            var href = event.currentTarget.href,
                hash = '#' + _.last( href.split( '#' ) );
            
            AppInstance = require( 'AppInstance' );
            
            // Let Backbone route this for you. Triggering forces
            // the router to load a new page
            AppInstance.Router.navigate( hash, { trigger: true } );
            
            // returning false cancels the event
            return false;
        }
        
    } );
    
} );