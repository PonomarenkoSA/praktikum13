const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  try {
    User.create({ name, about, avatar })
      .then((user) => res.send({ data: user }))
      .catch((err) => res.status(500).send({ error: err.message }));
  } catch (err) {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
};

module.exports.getOneUser = (req, res) => {
  try {
    User.findById(req.params.userId).orFail(new Error(`Пользователь c id: ${req.params.userId} не найден`))
      .then((user) => res.send({ data: user }))
      .catch((err) => res.status(500).send({ error: err.message }));
  } catch (err) {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
};
