define( function( require ) {

    var Marionette = require( 'marionette' ),
        Backbone = require( 'backbone' ),
        Router = require( 'Router' ),
        Controller = require( 'Controller' ),
        NavigationView = require( 'view/Navigation' ),
        RedThemeModule = require( 'module/RedTheme/Module' ),
        BlueThemeModule = require( 'module/blueTheme/Module' );
    
    return Marionette.Application.extend( {
        
        /**
         * Define the regions for the application. 
         * 
         * @returns {Object}
         */
        regions: function() {
            return {
                
                regionHeader: 'header',
                
                regionMain: 'section',
                
                regionFooter: 'footer'
                
            };
        },
        
        /**
         * 
         * @param   {Object}    options
         */
        start: function( options ) {
            var navigationView = new NavigationView();
            
            // Perform the default 'start' functionality
            Marionette.Application.prototype.start.apply( this, [ options ] );     
            
            // Add in the site navigation
            this.regionHeader.show( navigationView );
            
            // Add routers
            this.Router = new Router( { controller: new Controller() } );
            
            // Add modules
            this.module( 'RedThemeModule', { moduleClass: RedThemeModule } );
            
            // This is a very simple demo, and as such I'm going to use
            // hashes for internal navigation.  If you want Backbone/Marionette
            // to enforce full URLs use:
            // Backbone.history.start( { pushState: true } );
            Backbone.history.start( );
        }

    } );
    
} );