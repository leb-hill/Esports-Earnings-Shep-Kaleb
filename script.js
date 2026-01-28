var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/US%20States.csv"



var stateNames = getColumn(url,1);
var codeNames = getColumn(url,2);
var stateNicknames = getColumn(url,3);
var admissionNumber = getColumn (url,6);
var capitals = getColumn (url,7);
var capitalWebsite = getColumn (url,8);
var populationRank = getColumn (url,10);
var medianIncome = getColumn (url,18);
var povertyPercent = getColumn (url,19);
var collegePercent = getColumn (url,20);
var population = getColumn (url,9);


// this function returns nickname of a given US State

function getStateNickname(State){
    for (var i = 0; i < stateNicknames.length;i++){
        if (stateNames[i].toLowerCase() == State.toLowerCase()){ //check if the current state matches the inputed state
        return stateNicknames[i] //returns matching state
        }
    }
    return "Not found";
}

console.log(getStateNickname("Virginia"));




// returns the population of a us state i put in

function getStatePopulation(State) {
for (var i = 0; i < stateNames.length; i++){
        if (stateNames[i].toLowerCase() == State.toLowerCase()){ //Checks for match
        return Number(population[i]).toLocaleString(); //returns if matched state is found
        }
    }
    return "Not found"; // If state isn't found returns this
}

console.log(getStatePopulation("Virginia"));

//returns capital city of a given us state
function getStateCapital(State) {
for (var i = 0; i < stateNames.length; i++){
        if (stateNames[i].toLowerCase() == State.toLowerCase()){//Finds matches in the list
        return capitals[i]; // gives population of the state if it is found
        }
    }
    return "Not found"; // if not found returns "not found"

}


console.log(getStateCapital("Virginia"));

// returns median income of a given US state
function getStateMedianIncome(State) {
  for (var i = 0; i < stateNames.length; i++) {
    if (stateNames[i].toLowerCase() == State.toLowerCase()) { //Check the state
    return "$" + Number(medianIncome[i]).toLocaleString();// return the income
    }
  }
  return "Not found"; //If not found
}

console.log(getStateMedianIncome("Virginia"));


//returns percentage of people in poverty in a given US State
function getStatePovertyPercent(State) {
  for (var i = 0; i < stateNames.length; i++) {
    if (stateNames[i].toLowerCase() == State.toLowerCase()) { //Check state
      return povertyPercent[i] + "%"; // return percent
    }
  }
  return "Not found"; //If state not found
}


console.log(getStatePovertyPercent("Virginia"));