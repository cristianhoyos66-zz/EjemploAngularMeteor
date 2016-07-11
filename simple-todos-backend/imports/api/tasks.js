import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

function tasksPublication() {
  return Tasks.find();
}

Meteor.publish('tasks', tasksPublication);

Meteor.methods({
  createTask: () => {
    Tasks.insert({name: 'vs2', pokemon: 'pendertuga'});
  }
});
