
var App = new (Backbone.View.extend({
    start: function() {
        Backbone.history.start();
    },

    events: {
        "click a" : function(e) {
            e.preventDefault();
            var url = e.currentTarget.pathname
            if (url) {
                Backbone.history.navigate(url, {trigger: true});
            }
        }
    },

    router: new (Backbone.Router.extend({
        routes: {
            "list/*path": "list",
            "": "home"
        },

        home: function() {
            console.log("Home");
        },

        list: function(path) {
            console.log("Listing: " + path);
        }
    }))
}))({el: $("body")})
