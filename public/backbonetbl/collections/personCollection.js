app.People = Backbone.Collection.extend({ //Prev Movies
		   
			model: app.Person,


		   sortAttribute: "rank",

		   sortDirection: 1,

		   // filterEmail: function (emailInput) {
		   // 		filtered = this.filter(function (perRow) {
		   // 			return perRow.get('email') === emailInput;
		   // 		});
		   // 		return new app.People(filtered);

		   // },
 
		   search: function (letters) {
		   		if(letters == "") return this;
		   		var k;
 
				var pattern = new RegExp(letters,"gi");
				return new app.People(this.filter(function(data) {
				  	return pattern.test(data.get("email")) ||
				  	pattern.test(data.get("id")) ||
				  	pattern.test(data.get("first_name")) ||
				  	pattern.test(data.get("last_name"))

				  	;
				}));  // return _()  deleted 
		   },

		   sortRows: function (attr) {
		      this.sortAttribute = attr;
		      this.sort();
		   },

		   comparator: function(a, b) {
		      var a = a.get(this.sortAttribute),
		          b = b.get(this.sortAttribute);
		      if (a == b) return 0;
		      if (this.sortDirection == 1) {
		         return a > b ? 1 : -1;
		      } else {
		         return a < b ? 1 : -1;
		      }
		   }
		});