require.config( {


    paths: {

        jquery: '../bower_components/jquery/dist/jquery.min',

        underscore: '../bower_components/underscore/underscore',

        backbone: '../bower_components/backbone/backbone',

        marionette: '../bower_components/marionette/lib/backbone.marionette'
        
    },


    shim: {

        jquery: {
            exports: '$',
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },

        marionette : {
            deps: [ 'jquery', 'underscore', 'backbone' ],
            exports: 'Marionette'
        }
        
    },
    
    baseURL: '/js'


});


require(
    [ 'AppInstance' ],
    
    /**
     *  All this will do is kick off the application...
     */
    function ( app ) {
        app.start();        
    }
);
