//types

//string = "words"
//numbers = 1,2,3,4
//booleans = true/false

var myName = 'Brooke';
var myAge = 30;
var isMarried = false;

var myFavShoes = ['boots', 'formal', 'tennis'];
console.log(myFavShoes[2]);

//Dallas fav places to eat
var usernames = [
  {
    name: 'Brooke',
    age: 30,
    isMarried: false,
    favShoes: ['boots', 'formal', 'tennis']
  },
  {
    name: 'Prince',
    age: 30,
    isMarried: false,
    favShoes: ['boots', 'formal', 'tennis']
  },
  {
    name: 'Armando',
    age: 30,
    isMarried: false,
    favShoes: ['boots', 'formal', 'tennis']
  }
];
//Object -method
var myUsername = {
  name: 'Brooke',
  age: 30,
  isMarried: false,
  favShoes: ['boots', 'formal', 'tennis'],
  sum: function(chicken, dog) {
    console.log(chicken + dog);
  }
};

myUsername.sum(5, 3);

var myFavShoes = ['boots', 'formal', 'tennis'];
var fishes = ['fish1', 'fish2', 'fish3', 'fish4'];

for (var i = 0; i < fishes.length; i++) {
  console.log('my dog has eaten ' + fishes[i]);
}

// //expression
// var sum = function(chicken, dog) {
//   console.log(chicken + dog);
// }

// //declaration
// function sum(chicken, dog) {
//   console.log(chicken + dog);
// }

// sum(5, 3);

// console.log(shoes);
