// let's put something in our database if it's empty
Meteor.startup(function () {
  if(Reviews.find().count() === 0) {
    Reviews.insert({name: "darmie", review: "Cool movie"});
  }
});