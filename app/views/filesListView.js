define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/filesList.html',
    'collections/fileCollection',
    'collections/directoryCollection',
    'views/fileView',
    'views/directoryView',
], function($, _, Backbone, filesList, fileCollection, directoryCollection, fileView, directoryView){
    return Backbone.View.extend({

        template: _.template(filesList),

        events: {
            'click #add': 'addNew',
            'click #select-toggle': 'selectToggle'
        },

        initialize: function(){
            console.log('List View Init');
            this.$el.html(this.template({}));
            
            this.newDirInput = this.$el.find("#new-dir");

            //todo unification both types into one "item"
            this.fileCollection = new fileCollection();
            this.fileCollection.on('add', this.addOneFile, this);
            this.fileCollection.fetch();

            this.directoryCollection = new directoryCollection();
            this.directoryCollection.on('add', this.addOneDirectory, this);
            this.directoryCollection.fetch();

            return this;
        },

        render: function(){
            return this;
        },

        addOneFile: function(fileModel) {

            var view = new fileView({model: fileModel});

            this.$el.find("#file-list").append(view.render().$el);
            return this;
        },
        addOneDirectory: function(directoryModel) {

            var view = new directoryView({model: directoryModel});

            this.$el.find("#file-list").append(view.render().$el);
            return this;
        },

        addNew: function(event){
            var newDirectory = this.newDirInput.val();
            if(newDirectory) {
                this.directoryCollection.create({
                    name: newDirectory,
                    selected: false
                });
                this.newDirInput.val('');
            }
        },

        selectToggle: function(){
            var selected = this.$el.find("#select-toggle")[0].checked;
            this.directoryCollection.each(function(el){
               el.save({'selected': selected});
                return this;
            })
        }
    })
});