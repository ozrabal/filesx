define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/filesList.html',
    'collections/fileCollection',
    'collections/directoryCollection'
], function($, _, Backbone, filesList, filesCollection, directoryCollection){
    return Backbone.View.extend({
        template: _.template(filesList),

        events: {
          'click #add': 'addNew'
        },

        initialize: function(){
            console.log('List View Init');
            this.$el.html(this.template({}));
            this.filesCollection = new filesCollection([
                {'name': 'file1.jpg'},
                {'name': 'file2.jpg'},
                {'name': 'file3.jpg'}
            ]);
            this.directoryCollection = new directoryCollection();
            return this;
        },
        render: function(){
            console.log(this.filesCollection);
            //this.$el.html(this.template);
            return this;
        },

        addNew: function(event){
            console.log('click new');
            this.directoryCollection.create({
                name: this.$el.find("#new-dir").val()
            });

        }
    })
});