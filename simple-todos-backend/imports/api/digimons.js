import { Mongo } from 'meteor/mongo';

export const Digimons = new Mongo.Collection('digimons');

function digimonsPublication() {
  return Digimons.find();
}

Meteor.methods({
  createDigimon: () => {
    Digimons.insert({name: 'DigiPitoshuu'});
  }
});
