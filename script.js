const names = ["joe", "rachel", "ross"];
let namesCapital = [];

namesCapital = names.map (function (name, index) { /*this anonymous function is the callback function*/
 return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(namesCapital);