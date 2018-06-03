import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');
export const Newsletters = new Mongo.Collection('newsletters');

if (Meteor.isServer) {
  Meteor.methods({
    ///
    // Users
    ///
    getAllUsers() {
      return Users.find();
    },

    getUser(userId) {
      // TODO
      return;
    },

    removeUser(userId) {
      // TODO
      return;
    },

    updateUserData(dataObj) {
      // TODO;
      return;
    },

    ///
    // Newsletters
    ///
    getAllNewsletters() {
      // TODO
      return;
    },

    getSingleNewsletter(postId) {
      // TODO
      return;
    },

    addNewsletter() {
      // TODO
      return;
    },

    removeNewsletter() {
      // TODO
      return;
    }
  });
}
