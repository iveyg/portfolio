$(function() {

		// instantiate Collection, populated with movies data
	   peopleList = new app.People(data);

	   // 	 	peopleList.fetch();

	   	// instantiate View, pupulated with backbone collection 
	   userList = new app.AppView({ collection: peopleList });

	   $('.wrapper').html( userList.render().$el.attr('id', 'movies') );
});
