//publish our data to the server
Meteor.publish('reviews', function(){
	return Reviews.find({});
});