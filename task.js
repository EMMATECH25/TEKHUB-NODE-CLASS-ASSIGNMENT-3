

let person = {
    name: 'Emmanuel',
    age:26,
    
};

person['likes food'] = true;

let habit = 'likes food';
person[habit];
console.log(person[habit]);


let device = 'andriod';

let phone ={
    [device]:'Tecno'
};

console.log(phone.andriod);

let league = {
    winner: 'liverpool',
    position: 1,
    isRelegated:true,
    runnersUp:'mancity',
    bestPlayer:'salah',
    teamMate:'bowen',
    fourth:'westham',
};

delete league.isRelegated

delete league.fourth

delete league.teamMate

delete league.runnersUp

console.log(league);












