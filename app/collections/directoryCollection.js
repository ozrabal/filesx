define([
    'backbone',
    'models/directoryModel',
], function(Backbone, directoryModel){
    return Backbone.Collection.extend({
        model: directoryModel,
        localStorage: new Backbone.LocalStorage('directory-collection')
    })
});