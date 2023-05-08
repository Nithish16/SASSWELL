const index = 11;
const cards = 50;
const persons = 22;

let tempPersons = { ...{temp: index} } 
let currentPerson = { ...{currentPerson: index} };
while(cards > 0) {
  cards--;

  if(tempPersons > persons) {
    tempPersons = 1
  } else {
	tempPersons++
  }
}
console.log(tempPersons);