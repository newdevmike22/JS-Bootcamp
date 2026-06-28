// Write a function named isValidPassword
// It accepts 2 arguments: password and username
// Password must:
// - Be at least 8 characters
// - Can't contain spaces
// - Can't contain the username
// Will be true if all requirements are met
// Otherwise, false

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword("helloits me"));
