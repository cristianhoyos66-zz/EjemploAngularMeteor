import { Meteor } from 'meteor/meteor';
import {Tasks} from '../imports/api/tasks.js';
import {Pokemons} from '../imports/api/pokemons.js';
import {Digimons} from '../imports/api/digimons.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publishComposite('taskToPokemons', {
  find: function () {
    return Tasks.find({});
  },
  children: [{
    find: function (task) {
      return Pokemons.find({name: task.pokemon});
    },
    children: [{
      find: function (pokemon) {
        return Digimons.find({ nameVS: pokemon.name});
      }
    }]
  }]
});
