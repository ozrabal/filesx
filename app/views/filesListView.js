define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/filesList.html',
    'collections/fileCollection'
], function($, _, Backbone, filesList, filesCollection){
    return Backbone.View.extend({
        template: _.template(filesList),

        events: {
          'click #add': 'addNew'
        },

        initialize: function(){
            console.log('List View Init');
            this.$el.html(this.template({}));
            this.filesCollection = new filesCollection();
            return this;
        },
        render: function(){
            //this.$el.html(this.template);
            return this;
        },

        addNew: function(event){
            console.log('click new');
            //todo change, only dir can be created in this way /add new model/collection for files
            this.filesCollection.create({
                name: this.$el.find("#new-dir").val()
            });

        }
    })
});