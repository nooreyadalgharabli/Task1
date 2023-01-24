const userList = [
  {
    id: 1,
    firstName: "Mohammed",
    lastName: "Ahmed",
    email: "Mohammed@gmail.com",
    balance: 450,
    isAdmin: true,
  },
  {
    id: 2,
    firstName: "Ali",
    lastName: "Omar",
    email: "Ali@gmail.com",
    balance: 750,
    isAdmin: true,
  },
  {
    id: 3,
    firstName: "Abdallah",
    lastName: "mahmoud",
    email: "Abdallah@gmail.com",
    balance: 500,
    isAdmin: false,
  },
];

//add new user
const newUser = {
  id: 4,
  firstName: "Noor",
  lastName: "Eyad",
  email: "Noor@gmail.com",
  balance: 550,
  isAdmin: true,
};

const pushNewUser = userList.push(newUser);

//edit the name of the user which is 2 to be 'Hazem'
// userList[1].firstName="Hazem";

for (let i = 0; i < userList.length; ++i) {
  if (userList[i].id == 2) {
    userList[i].firstName = "Hazem";
  }
}

//delete all users who are not admin

// for(let i =0; i<userList.length;++i){
//     if (userList[i].isAdmin == false){
//         delete userList[i];
//     }
// }

const filterArray = userList.filter((user) => user.isAdmin != false);

console.log(filterArray);
console.log(userList);
