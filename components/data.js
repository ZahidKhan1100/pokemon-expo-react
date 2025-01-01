import bulbasaur from '../assets/bulbasaur.png';
import charmander from '../assets/charmander.png';
import pikachu from '../assets/pikachu.png';
import squirtle from '../assets/squirtle.png';

const data = [
  {
    name: 'Charmander',
    image: charmander,
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  },
  {
    name: 'Squirtle',
    image: squirtle,
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  },
  {
    name: 'Bulbasaur',
    image: bulbasaur,
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
  {
    name: 'Pikachu',
    image: pikachu,
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  },
];

export default data;
