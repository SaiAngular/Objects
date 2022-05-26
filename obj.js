
 //Creating object using "new" keyword
 console.log("Creating object using neww keyword");


 // Example 1

 var cricket= new Object();

 cricket.team = "CSK";
 cricket.venue = "MCA Stadium";                         
 cricket.matches=70;
 cricket["players"]=11;
 cricket["Result"] = "Win/Lose";

 cricket.chennai = new Object();

cricket.chennai.player1 = "Dhoni";
cricket.chennai.player2="jadeja";
cricket.chennai["trophy"]="4";

console.log(cricket.team);
console.log(cricket.venue);
console.log(cricket.matches);
console.log(cricket["players"]);
console.log(cricket["Result"]);
console.log(cricket.chennai.player1);
console.log(cricket.chennai.player2);
console.log(cricket.chennai["trophy"]);

// Creating object with "Lateral" method

console.log("Creating object with Lateral method");

var cricket1 = {
   team:"CSK",
 venue:"MCA Stadium",                        
 matches:70,
 ["players"]:11,
 ["Result"]:"Win/Lose",

 player1:"Dhoni",
player2:"jadeja",
["trophy"]:"4",

}

console.log(cricket1.team);
console.log(cricket1.venue);
console.log(cricket1.matches);
console.log(cricket1["players"]);
console.log(cricket1["Result"]);


// Example 2

var hotel= new Object();

hotel.name = "Pradise";
hotel.food = "biryani";                         
hotel.cost=300;
hotel["rating"]=5;
hotel["taste"]="Good";

hotel.item = new Object();

hotel.item.nonveg = "chicken";
hotel.item.veg="sambar";
hotel.item["discount"]="10%";

console.log(hotel.name);
console.log(hotel.food);
console.log(hotel.cost);
console.log(hotel["rating"]);
console.log(hotel["taste"]);
console.log(hotel.item.nonveg);
console.log(hotel.item.veg);
console.log(hotel.item["discount"]);

console.log("Creating object with Lateral method");


var hotel1 = {
    name:"Pradaise",
  food:"Biryani",                        
  cost:300,
  ["rating"]:5,
  ["taste"]:"Good",
 
  
 }
 
 console.log(hotel1.name);
 console.log(hotel1.food);
 console.log(hotel1.cost);
 console.log(hotel1["rating"]);
 console.log(hotel1["taste"]);