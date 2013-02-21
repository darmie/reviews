// let's put something in our database if it's empty
Meteor.startup(function () {
  if(Reviews.find().count() === 0) {
    Reviews.insert({username: Session.get("username"), story: Session.get("story"), title: Session.get("title"), imgsrc: Session.get(imgsrc)});
    Reviews.insert({username: "darmie", story: "Cool movie", title:"null", imgsrc:"null"});
  }
});
