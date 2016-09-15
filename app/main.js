require.config({
    baseUrl: 'app/',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone-min',
        'localStorage': '../libs/backbone.localStorage',

    },
    shim: {
        'jquery': {
            exports: '$',
        },
        'underscore': {
            exports: '_',
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone',
        },
        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone.localStorage',
        }
    }
});

require([
    'router',
    'jquery',
    'underscore',
    'backbone',
    'localStorage'
], function(FilesRouter) {
    window.app = new FilesRouter();
});
