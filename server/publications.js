import { Meteor } from 'meteor/meteor';

import { Posts } from '../imports/lib/collections.js';

Meteor.publish('posts', () => {
  const selector = {category: {$ne: "private"}};
  return Posts.find(selector);
});

Meteor.publish('singlePost', _id => {
  check(_id, String);
  // Meteor._sleepForMs(2000);
  return Posts.find({_id});
});
