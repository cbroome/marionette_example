define( function( require ) {

    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        render: function() {
            // Normally I'd put this much html in its own template file, but
            // this is just for an example
            var html = '<hr />'
                + '<div>This is a simple marionette application to illustrate:</div>'
                + '<ul>'
                + '<li>App-routing</li>'
                + '<li>Modules</li>'
                + '<li>RequireJS and AMD structure</li>'
                + '<li>RequireJS\'s SugarCRM syntax</li>'
                + '</ul>'
                + '<div><a href="https://github.com/cbroome/marionette_example" target="_blank">Full Source</a></div>';
            
            this.$el.append( html );
            
            return this;
        }
        
    } );
} );