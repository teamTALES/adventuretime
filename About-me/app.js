'use strict';

var pet = prompt('What is your ideal pet?');
alert(pet + " huh? Those are pretty cool. I'm a dog person myself.");
console.log('Their ideal pet is: ' + pet);

var breed = prompt('What is the breed of your ' + pet + '?');
alert("A " + breed + " sounds gorgeous! I've never heard of a " + pet + " like that before.");
console.log("Their pet's breed is: " + breed);

var name = prompt('What would you name your ' + breed + '?');
alert('You would name your ' + pet + ' ' + name + "? Well, that's all right. To each their own.");
console.log("Their pet's name is: " + name);

var travel = prompt('Would you take your ' + pet + ' ' + name + ' where ever you go?');
alert('I think we should always have our animal companions nearby. Everyone would be way less stressed with a cute ' + breed + ' ' + pet + ' like ' + name + ' around!');
console.log(travel + ', is the response to whether or not they would take their pet everywhere.');
