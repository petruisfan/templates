/**
 * User: petru
 * Date: 6/19/13
 * Time: 12:24 PM
 */
window.Class = {
    Model: {
        FileList: Backbone.Model.extend({
            initialize: function() {
                this.on("change", function() {
                    var element = $("div#fileList");
                    new Class.View.FileList({model: this, el: element});
                })
            }
        })
    },
    Collection: {},
    View: {
        FileList: Backbone.View.extend({
            initialize: function() {
                this.template = _.template($("#fileListTemplate").html());
                this.render();
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
            }
        })
    }
}
