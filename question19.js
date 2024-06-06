// Question 19
function registerUser(usersArray, newUser) {
  const existingUser = usersArray.find(
    (user) => user.username === newUser.username
  );

  if (!existingUser) {
    usersArray.push(newUser);
    console.log(`User ${newUser.username} successfully registered.`);
  } else {
    console.log(
      `Username ${newUser.username} already exists. Registration failed.`
    );
  }

  return usersArray;
}

let users = [
  { username: "larusan", email: "wijimanpro7@gmail.com" },
  { username: "thusjanth", email: "p.thusjanth@gmail.com" },
];

let newUser = { username: "kirushanth", email: "kirushanth200026@gmail.com" };

users = registerUser(users, newUser);
console.log(users);
