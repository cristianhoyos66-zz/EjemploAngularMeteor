import { Mongo } from 'meteor/mongo';

export const Pokemons = new Mongo.Collection('pokemons');

function pokemonsPublication() {
  return Pokemons.find();
}

Meteor.publish('Pokemons}', pokemonsPublication);

Meteor.methods({
  createPokemon: () => {
    Pokemons.insert({name: 'Pitoshuu'});
  }
});
