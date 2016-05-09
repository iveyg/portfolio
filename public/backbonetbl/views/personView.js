app.AppRow = Backbone.View.extend({
	   tagName: 'tr',
	   template: null,

	   events: {
	   		"click td:last-child": "deleteRow"
	   },
	   initialize: function() {
	      this.template = _.template( $('#person-row').html() );
	      
	   },

	   deleteRow: function () {
	   		console.log("in delete function")
	   		this.model.trigger("destroy", this.model);
	   		this.remove();
	   },

	   render: function() {
	      this.$el.html( this.template( this.model.toJSON()) );
	      return this;
	   }
	});