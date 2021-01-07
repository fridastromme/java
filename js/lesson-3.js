//* LESSON 3: OBJECTS AND ARRAYS *//

//animal object

// type = "elephant"
// colour = "grey"
// number of legs = 4
// domesticated = no

//* remember: objects live inside {}. On the left side is the key (the name), and right side the value*//

var animal = {
    type: "elephant",
    colour: "grey",
    numberOfLegs: 4,
    domesticated: false
};

//console.log(animal);

//* Above logs all the properties inside a variable. If you want to find a spesific property, use this:*//

console.log(animal.colour);

//* Example of another object *//

// vehicle object

// category = "car"
// colour = "pink"
// number of wheels = 4
// number of wings = not applicable

//* How do we handle a non applicable value? hmm. This is where we use the null value! *//

var vehicle = {
    category: "car",
    colour: "pink",
    numberOfWheels: 4,
    numberOfWings: null
};

//console.log(vehicle);

//* Access specific property:*//

console.log(vehicle.colour);