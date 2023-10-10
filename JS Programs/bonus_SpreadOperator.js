
// fist array example
const FullName = ["Abdul", "Samad"];
// include spread operator in bioData array e.g ...and whay you want to add
const biodata = [1, ...FullName, 22, "Male"];
// print the array
console.log(biodata);

// array distructing: 
const [first, allData] = biodata;
console.log(" ",biodata,"array Distructing");


// game collection array: with spread operator
var games = [
    {
        game: 1,
        name: "Call Of Duty",
        title: "Shoot game"
    },
    {
        game: 2,
        name: "Modern Warfare",
        title: "Shoot game"
    },
    {
        game: 3,
        name: "Pubg PC",
        title: "Multiplayer Game"
    },
];

const [firstG, allGame] = games;
// const [firstG, ...allGame] = games;
// console.log(games, "games", "   ", ...biodata);
console.log(games, "games");
console.log(allGame);


// object with spread operator
const Names = {
    FirstName: "Abdul",
    LastName: "Samad"
}
// include this object on second bio data object 
const BioData = {
    Id: 1,
    ...Names,
    Age: 22,
    Gender: "male",
    Number: '+923020034019',
    Address: "Badin Sindh Pakistan",
    Cast: "Pathan",
    Cnic: 4110110465581
}
console.log("--------------------------");
console.log(BioData);