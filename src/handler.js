'use strict';

module.exports.generateUser = async (event) => {
  const randomUser = parseInt(Math.random()*100);
  console.log("Random user id ",randomUser);
  return randomUser;
};
