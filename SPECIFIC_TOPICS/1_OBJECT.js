// Link: https://www.w3schools.com/jsref/jsref_obj_object.asp

// JavScript Object - An object is a collection of key-value pairs (known as properties). A property's value can be a function, where the proeprty will be known as a method.


// Example of object:

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};

// Keys: "firstname", "lastname", "age", "eyeColor"
// values: "John", "Doe", 50, "blue"


// Methods or Properties: -


// 1) object.assign(trgt_obj, src_obj)  ===>    This method copies the properties of src_obj and paste it to the trgt_object;
// Object.assign(person1, person2);
// console.log(Object.entries(person1));


// 2) <object>.constructor  ===>    The constructor property returns the function that created the Object prototype. For JavaScript objects the constructor property returns: "function Object() { [native code] }"
// console.log(person1.constructor);


// 3) new_obj.create(old_obj)   ===> The Object.create() creates an object from an existing object.
// let person3 = Object.create(person2);
// person3.firstName = "Ankan";
// person3.lastName = "Maity";
// console.log(Object.entries(person3));


// 4) Object.defineProperties(0bject, {properties: {value: "val"})  ===>    This method adds or changes object properties, and lets you changes the property metadata and also lets you add getters and setters.

// Object.defineProperties(person2, {
//     language: {value: "en"},
//     firstName: {value: "Hello"}
// });

// console.log(person2.language);
// console.log(person2.firstName);


// 5) Object.entries(obj)   ===>    This method returns the key value pairs of an object and does not change the original object.
// let text = "";
// for (let [k, v] of Object.entries(person1)) {
//   text += k + ": " + v;
//   console.log(text);
//   text = "";
// }


// 6) Object.freeze(object) ===>    This method freezes any object so that the object cannnot be changed, deleted, added. (Need to use "use strict"). In non-strict mode it will fail silently.

// "use strict"
// // Create Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Freeze Object
// Object.freeze(person)

// // This will throw an error
// person.age = 51;


// 7) Object.isFrozen(object)   ====>   This method is used to check whether the object is frozen or not.
// Object.isFrozen(person1);


// 8) Object.formEntries(entries of key-value pairs)    ===>    This method creates an object from a list of key value pairs.

// let new_obj = Object.fromEntries([["Name", "Ankan maity"],["Age", 21],["Course", "B.Tech in CSE"]]);
// console.log(new_obj);


// 9) Object.getOwnPropertyDescriptor(object, key)   ===> This method gets the property descriptor of the object and does not change the original value.
// let res = Object.getOwnPropertyDescriptor(person1, "firstName");
// console.log(res.value);


// 10) Object.getOwnPropertyDescriptors(object)   ===> This method gets the property descriptor of the object and does not change the original value.
// let res = Object.getOwnPropertyDescriptors(person1);
// console.log(res.age.value);
// console.log(res.firstName.value);
// console.log(res.lastName.value);
// console.log(res.eyeColor.value);


// 11) Object.getOwnPropertyNames(object)   ===>    This method returns an array of properties of an object.
// let prop = Object.getOwnPropertyNames(person1);
// let i;
// for(i=0;i<prop.length;i++){
//     console.log(prop[i]);
// }


// 12) Object.preventExtensions(object) ===>    This method prevents an object from being added with any more properties.
// Object.preventExtensions(person1);


// 13) Object.isExtensible(object)  ===>    This method returns true if the object is extensible otherwise false.
// Object.isExtensible(person1);


// 14) Object.seal(object)  ===>    This method is used to prevent addition or deletion of properties, makes existing proeprties non-configurable, will fail silently in non-strict mode.
// Object.seal(person1);

// person1.firstName = "Alexander"; // this will throw error


// 15) Object.isSeal(object)    ===>    This method returns true if the object is sealed, otherwise false.
// Object.isSealed(person1);


// 16) Object.toString(object)  ===>    This method converts an object to strinhg if possible otherwise returns "function Object() { [native code] }"."
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.toString();


// 17) 