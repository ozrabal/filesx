define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/filesList.html'
], function($, _, Backbone, filesList){
    return Backbone.View.extend({
        template: _.template(filesList),

        events: {
          'click #add': 'addNew'
        },

        initialize: function(){
            console.log('List View Init');
            this.$el.html(this.template({}));
            return this;
        },
        render: function(){
            //this.$el.html(this.template);
            return this;
        },

        addNew: function(event){
            console.log('click new');
        }
    })
});