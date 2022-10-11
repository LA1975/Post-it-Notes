const SQL = require("sql-template-strings");
const dbPromise = require("./notes-database.js");

async function fetchAllUsers() {
  const db = await dbPromise;

  const allUsers = await db.all(SQL`
            select * from users`);

  return allUsers;
}

//fetch user from the db by username
async function fetchUser(username) {
  const db = await dbPromise;

  const user = await db.get(SQL`
        select * from users
        where username = ${username}`);

  return user;
}


//create new user
async function createUser(user) {
  const db = await dbPromise;

  const result = await db.run(SQL`
        insert into users (username, password, first_name, last_name, email, dob) 
        values
        (${user.username}, ${user.password}, ${user.first_name}, ${user.last_name}, ${user.email}, ${user.dob}`);

  // Get the auto-generated ID value, and assign it back to the user object.
  user.user_id = result.lastID;
}

//get user with authToken
async function getUserWithAuthToken(authToken) {
  const db = await dbPromise;

  const user = await db.get(SQL`
        select * from users
        where authToken = ${authToken}`);

  return user;
}

//delete user by user id
async function deleteUser(id) {
  const db = await dbPromise;

  const user = await db.run(SQL`
            delete from users
            where user_id = ${id}`);

  return user;
}

module.exports = {
  fetchUser,
  fetchUserById,
  updateUser,
  createUser,
  deleteUser,
  fetchAllUsers,
  getUserWithAuthToken,
};
