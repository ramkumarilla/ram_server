const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();
const user4Id = mongoose.Types.ObjectId();
const user5Id = mongoose.Types.ObjectId();
const user6Id = mongoose.Types.ObjectId();

module.exports = {
  
  "users": [
   {"id":user1Id,"name":"Leanne Graham","email":"Sincere@april.biz","grade": "1"},
   {"id":user2Id,"name":"Ervin Howell","email":"Shanna@melissa.tv","grade": "2"},
   {"id":user3Id,"name":"Clementine Bauch","email":"Nathan@yesenia.net","grade": "4"},
   {"id":user4Id,"name":"Patricia Lebsack","email":"Julianne.OConner@kory.org","grade": "1"},
   {"id":user5Id,"name":"Chelsey Dietrich","email":"Lucio_Hettinger@annie.ca","grade": "2"},
   {"id":user6Id,"name":"Mrs. Dennis Schulist","email":"Karley_Dach@jasper.info","grade": "1"},
  ]
};
