define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/directoryView.html'
], function($, _, Backbone, directoryView){
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template(directoryView),

        events: {
            'click .btn-edit': 'edit',
            'click .btn-save': 'update', //todo on hit enter too
        },

        initialize: function(){

            this.model.on('change', this.render, this);
            return this;
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        edit: function(){
            //todo refactor /find(.name) into constructor
            this.$el.addClass('active').find('.name').focus();
            return this;
        },

        update: function(){
            var value = this.$el.find('.name').val();
            if (value) {
                this.model.save({name: value});
            }
            this.$el.removeClass('active');
            return this;
        }
    })
})