define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/directoryView.html'
], function($, _, Backbone, directoryView){
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template(directoryView),

        initialize: function(){

            this.model.on('change', this.render, this);
            return this;
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    })
})