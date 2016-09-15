require.config({
    baseUrl: 'app/',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone-min',
        'text': '../bower_components/text/text',
        'localStorage': '../libs/backbone.localStorage'

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
            exports: 'localStorage',
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
