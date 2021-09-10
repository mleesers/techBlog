const { User } = require('../models');

const userdata = [
  {
      username:"User1",
      password:"jkcdsbsfbc",
  },
  {
      username:"User2",
      password:"hdsbjhdbc",
  },
  {
      username:"User3",
      password:"Ooquau4lie",
  },
  {
      username:"User4",
      password:"mfsdknkjdafn",
  },
  {
      username:"User5",
      password:"gjhacb",
  },
  {
      username:"User6",
      password:"cjkhjadb",
  },
  {
      username:"User7",
      password:"cskjabkfj",
  },
  {
      username:"User8",
      password:"cydguijsd",
  },
  {
      username:"User9",
      password:"abcbcdscsdh",
  },
  {
      username:"Jeff",
      password:"jhsdcihcdsa",
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;