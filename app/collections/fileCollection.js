define([
    'jquery',
    'underscore',
    'backbone',
    'localStorage',
    'models/fileModel'
], function($, _, Backbone, localStorage, fileModel){
    return Backbone.Collection.extend({
        model: fileModel,
        localStorage: new Backbone.LocalStorage('file-collection'),
    })
    //return filesCollection;
})