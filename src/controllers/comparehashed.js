// use bcrypt to compare the passwords and return a boolean asynchronously just only to check sth this file means nth for this code

const compareHashed = (password, hashedpassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedpassword, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = compareHashed;
