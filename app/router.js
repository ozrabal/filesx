define([
    'jquery',
    'backbone'
], function($, Backbone) {
    return Backbone.Router.extend({
        routes: {
            '' : 'index'
        },
        initialize: function() {
            Backbone.history.start();
            return this;
        },
        index: function(){
            console.log('index');
        }
    });
});