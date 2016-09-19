define([
    'backbone',
    'models/directoryModel',
], function(Backbone, directoryModel){
    return Backbone.Collection.extend({
        model: directoryModel,
        localStorage: new Backbone.LocalStorage('directory-collection'),

        selected: function() {
            return this.filter(function(directoryModel){ return directoryModel.get('selected'); });
        },
    })
});