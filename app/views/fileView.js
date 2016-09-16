define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/fileView.html'
], function($, _, Backbone, filesView){
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template(filesView),



        initialize: function(){

            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
            return this;
        },
        render: function(){
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    })
})