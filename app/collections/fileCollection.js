define([
    'backbone',
    'models/fileModel'
], function(Backbone, fileModel){
    return Backbone.Collection.extend({
        model: fileModel,
        url: 'app/data.json'
    })
})