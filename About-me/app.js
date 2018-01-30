'use strict';

const intro = prompt('Have you ever had a pet?');
    if (intro.toLowerCase() === 'yes' || 'y') {
        alert('That\'s awesome! Pet\'s are so rewarding.');
    } else {
        alert('I am so sorry that you have never known the joy!');
    }
console.log(intro);

const pet = prompt('What is your ideal pet?');
alert(pet + ' huh? Those are pretty cool. I\'m a dog person myself.');
console.log('Their ideal pet is: ' + pet);

const common = prompt('Are those common where you live?');
    if (common.toLowerCase() === 'yes' || 'y') {
        alert('Thought so, I can\'t imagine a place without a friendly ' + pet + ' around.');
    } else {
        alert('How interesting!');
    }
console.log(common);

const breed = prompt('What is the breed of your ' + pet + '?');
alert('A ' + breed + '? Sounds gorgeous! I\'ve never heard of a ' + pet + ' like that before.');
console.log('Their pet\'s breed is: ' + breed);

const pure = prompt('Are you dead set on a pure breed?');
    if (pure.toLowerCase() === 'yes' || 'y') {
        alert('Nothing wrong with that. Make sure you go through a reputable breeder!');
    } else {
        alert('Nothing wrong with that. Consider looking into your local shelter or rescue!');
    }
console.log(pure);

const name = prompt('What would you name your ' + breed + '?');
alert('You would name your ' + pet + ' ' + name + '? Well, that\'s all right. To each their own.');
console.log('Their pet\'s name is: ' + name);

const funky = prompt('Are you a fan of funky pet names?');
    if (funky.toLowerCase() === 'yes' || 'y') {
        alert('There are some pretty clever ones out there and some equally silly ones. I knew a dog once called Chunky Chew.')
    } else {
        alert('Well, with a '+ pet + ' named ' + name + ' you seem like a more mature pet namer.');
    }
console.log(funky);

const travel = prompt('Would you take your ' + pet + ' ' + name + ' where ever you go?');
alert('I think we should always have our animal companions nearby. Everyone would be way less stressed with a cute ' + breed + ' ' + pet + ' like ' + name + ' around!');
console.log(travel + ', is the response to whether or not they would take their pet everywhere.');

const trip = prompt('Would you consider taking your ' + pet + ' on trips?');
    if (trip.toLowerCase() === 'yes' || 'y') {
        alert('I know I love having my dog buddy on vacation. He loves the beach especially.');
    } else {
        alert('Poor ' + name + ', you\'ve got them on a tight leash! Pun intended ;p');
    }
    console.log(trip);