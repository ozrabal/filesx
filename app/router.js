define([
    'jquery',
    'backbone'
], function($, Backbone) {
    return Backbone.Router.extend({
        routes: {
            '' : 'index'
        },
        initialize: function() {
            Backbone.history.start();
            return this;
        },
        index: function(){
            console.log('index');

            this.setView({
                name: 'filesListView'
            });
            return this;
        },
        setView: function(options) {
            $.proxy(require(['views/'+options.name], function(View) {
                if (this.view)
                    this.view.remove();
                this.view = new View(options);
                $('#filesxapp').append(this.view.render().$el);
            }), this);
            return this;
        }
    });
});