// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) { 
    let testNumber = Number(testInput);
    if (testInput===""){
        return "Empty";
        } else if (isNaN (testNumber)=== true){
            return "Not a number";
        } else if (isNaN(testNumber)=== false){
            return "Is a number";
        }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");  
    }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){      
        alert("Enter a name");    
    }else if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Enter a number");
    }else{
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "visible";
        
        if(fuelLevel >= 10000 && cargoLevel < 10000){
            fuelStatus.innerHTML = `Fuel level enough for launch`;  
            cargoStatus.innerHTML = `Cargo weight under threshold`      
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            list.style.visibility = "visible";
        }else if(fuelLevel < 10000){
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
        }else if(cargoLevel > 10000){
            cargoStatus.innerHTML = `Too much cargo for launch`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
           
        }
   
    }

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {

    let random = Math.floor(Math.random() * planets.length)
    return planets[random];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
