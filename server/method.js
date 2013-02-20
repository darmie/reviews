//method to post the reviews

Meteor.methods({
  review: function (name, review, title, imgsrc) {
    if (review) {
      if (!name) {
        name = 'Anonymous';
      }
      Reviews.insert({username: name, story: review, title:title, imgsrc:imgsrc});
      return true;
    }
    return false;
  }
});