define([
    'backbone',
    'models/fileModel'
], function(Backbone, fileModel){
    return Backbone.Collection.extend({
        model: fileModel,
        localStorage: new Backbone.LocalStorage('file-collection'),
    })
})