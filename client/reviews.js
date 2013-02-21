Meteor.autorun(function () {
	Meteor.subscribe("reviews");
});
function gup(parameter) { 
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;

  var params = loc.split("&");
  for (i=0; i<params.length;i++) {
      param_name = params[i].substring(0,params[i].indexOf('='));
      if (param_name == parameter) {
          param_value = params[i].substring(params[i].indexOf('=')+1)
      }
  }
  if (param_value) {
      return param_value;
  }
  else {
      return false; //Here determine return if no parameter is found
  }
}
var  title = gup('title');

var  title = title.replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ").replace("%20"," ");
var  imgsrc = gup('imgsrc');
// Templates

Template.reviewList.reviews = function() {
  return Reviews.find();
};
Template.movietitle.title = function(){
	return title;
};
Template.movieimage.imgsrc = function(){
	return imgsrc;
};

// function to submit form
Template.field_set.events = {
 'click input.submit':function() {
 	var a_name = $('input#textinput1').val();
	var a_review = $('input#textarea1').val();
	var img = imgsrc;
	var movietitle = title;
	Session.set("username", a_name);
	Session.set("story", a_review);
	Session.set("title", movietitle);
	Session.set("imgsrc", img);

 }
} 
