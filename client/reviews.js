Meteor.subscribe("reviews");
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
var a_name = $('input#textinput1').val();
var a_review = $('input#textarea1').val();
// function to submit form
Template.field_set.events = {
 'click.input.submit':function() {
	Meteor.Call('review', a_name , a_review, title, imgsrc, 
	function(error, result){
		if(!result){
			$('input#textinput1').attr('placeholder', 'please enter your name...');
			$('input#textarea1').attr('placeholder', 'please enter a review about this movie...');
		}
		else if (!error) {
          $('input#textinput1').val('');
          $('input#textarea1').attr('placeholder', 'review');
        }
	});
 }
} 