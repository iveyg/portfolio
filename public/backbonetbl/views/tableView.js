 app.AppView = Backbone.View.extend({
	   personRows: [],

	    tagName: 'div', // prev 'table'

	    className: 'container', //prev 'table'

	    template: null,

	   sortUpIcon: 'ui-icon-triangle-1-n',

	   sortDnIcon: 'ui-icon-triangle-1-s',
	   
	   events: {
	      "click th" : "headerClick",
	      // "click .btn": "search",
	      "keyup #taskSorting" : "search",
	      "click #inputrow": "createNewRow"
	      
	   },

	   initialize: function() {
	      this.template = _.template( $('#person-table').html() );
	      this.listenTo(this.collection, "sort", this.updateTable);
	      this.listenTo(peopleList, 'add', this.addOne);

	      $table = this.$('tbody');
	   },

	   render: function() {

	      this.$el.html(this.template());
	   
	      this.$('th div')
	             .append($('<span>'))
	             .closest('thead')
	             .find('span')
	               .addClass('ui-icon icon-none')
	               .end()
	             .find('[column="'+this.collection.sortAttribute+'"] span')
	               .removeClass('icon-none').addClass(this.sortUpIcon);
	      this.updateTable();
	      return this;
	   },

	   headerClick: function( e ) {
	      var $el = $(e.currentTarget),
	          ns = $el.attr('column'),
	          cs = this.collection.sortAttribute;
	      if (ns == cs) {
	         this.collection.sortDirection *= -1;
	      } else {
	         this.collection.sortDirection = 1;
	      }
	      $el.closest('thead').find('span').attr('class', 'ui-icon icon-none');
	      if (this.collection.sortDirection == 1) {
	         $el.find('span').removeClass('icon-none').addClass(this.sortUpIcon);
	      } else {
	         $el.find('span').removeClass('icon-none').addClass(this.sortDnIcon);
	      }
	      this.collection.sortRows(ns);
	   },
	   updateTable: function (inputCollection) { //added input collection for filtering 
	      
	   	if (inputCollection) {
	   		var ref = inputCollection;
	   		console.log ("in input collection");
	   	} else {
	   		var ref = this.collection;
	   	}

	      // var ref = inputCollection || this.collection,
	      	var $table;
	      _.invoke(this.personRows, 'remove');
	      $table =   this.$('tbody');//this.$('tbody');
	      this.personRows = ref.map(//this.collection.map(
	            function ( obj ) {
	                  var v = new app.AppRow({  model: ref.get(obj) });
	                  $table.append(v.render().$el);
	                  return v;
	              });
	   },

	   search: function (e) {
	   		
	   		var letters = $('#taskSorting').val();
	   		// var letters = "mmorgan6@newyorker.com";
	   		this.updateTable(this.collection.search(letters))
	   		// this.collection.filterEmail("jmorales4@ibm.com");
	   },

	   createNewRow: function () {
	 		console.log ("In createNewRow Function");

	 		
	   		//calculating new index

	   		var arr = [];

	   		this.collection.forEach(function(model) {   
	   				arr.push(model.get("id"));
	   			});

	   		peopleList.create({
	   			id: _.max(arr) + 1, 
   				first_name: this.$('[name="firstname"]').val().trim(),
	   			last_name: this.$('[name="lastname"]').val().trim(),
	   			email: this.$('[name="email"]').val().trim()
	   		});

	   		// this.$('[name="firstname"]').val() = "";
	   		// this.$('[name="lastname"]').val() = "";
	   		// this.$('[name="email"]').val() = "";
	   }, 

	   addOne: function (persn) {
	   		console.log('in addOne function')
	   
   			var v = new app.AppRow({  model: persn });
			$table.append(v.render().$el);

	   }
	 });