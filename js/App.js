define( function( require ) {

    var Marionette = require( 'marionette' ),
        Backbone = require( 'backbone' ),
        Router = require( 'Router' ),
        Controller = require( 'Controller' );
    
    return Marionette.Application.extend( {
        
        /**
         * Define the regions for the application. 
         * 
         * @returns {Object}
         */
        regions: function() {
            return {
                
                header: 'header',
                
                section: 'section',
                
                footer: 'footer'
                
            };
        },
        
        /**
         * 
         * @param   {Object}    options
         */
        start: function( options ) {
            
            // Perform the default 'start' functionality
            Marionette.Application.prototype.start.apply( this, [ options ] );     
            
            // Add routers
            this.Router = new Router( { controller: new Controller() } );
            
            // Add modules
            this.module( 'Admin', { moduleClass: AdminModule } );
            
            Backbone.history.start({pushState: true});
        }

    } );
    
} );