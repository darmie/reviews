//method to post the reviews

Meteor.methods({
  review: function (name, review, title, imgsrc) {
    if (review) {
      if (!name) {
        name = 'Anonymous';
      }
      Reviews.insert({name: name, review: review, title:title, imgsrc:imgsrc});
      return true;
    }
    return false;
  }
});