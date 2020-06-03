const User = require('../models/users');

exports.getSecret = function (req, res) {
  return res.json({secret: 'I am secret Message'})
}

exports.getUsers = function(req, res) {
  User.find({})
        .exec((errors, users) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(users);
  });
}

exports.updateUser = (req, res) => {
  const id = req.query.id;
  const userData = req.body;
  console.log(id);
  console.log(userData);
    // new: bool - true to return the modified document rather than the original. defaults to false
    User.findByIdAndUpdate(id, { $set: userData}, { new: true }, (errors, updatedUser) => {
      if (errors) return res.status(422).send({errors});

      return res.json(updatedUser);
    });
}


exports.deleteUser = (req,res) => {
  const userId = req.query.id;
	User.findByIdAndDelete(userId, (errors, userId) => {
      if (errors) return res.status(422).send({errors});
      return res.sendStatus(200);
    });
}


exports.createUser = function(req, res) {
  const registerData = req.body

  if (!registerData.name) {
    return res.status(422).json({
      errors: {
        name: 'is required',
        message: 'Name is required'
      }
    })
  }

  const emp = new User(registerData);

  return emp.save((errors, savedUser) => {
    if (errors) {
      return res.status(422).json({errors})
    }

    return res.json(savedUser)
  })
}

getUser = function(id, callback) {
  User.findById(id)
        .exec(callback);
}

exports.getUserById = function(req, res) {
  const id = req.query.id;
  console.log(id);

  getUser(id, (errors, user) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(user);
  });
}










