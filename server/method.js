//method to post the reviews

Meteor.methods({
  review: function (name, a_review, title, imgsrc) {
    if (a_review) {
      if (!name) {
        name = 'Anonymous';
      }
      Reviews.insert({username: name, story: a_review, title:title, imgsrc:imgsrc});
      return true;
    }
    return false;
  }
});