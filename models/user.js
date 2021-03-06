const mongoose = require('mongoose');

const reg = /^https?:\/\/(w{3}\.)?(?!www)((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([A-Za-z\d]+(-[A-Za-z\d]+)*\.)+[A-Za-z]{2,6})(:(1[0-9]|[2-9][0-9]|[1-9][0-9]{2,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?((\/|(\/[\dA-Za-z]+(-[A-Za-z\d]+)*)+\/?)#?)?/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (value) => reg.test(value),
      message: (props) => `${props.value} Невалидная ссылка!`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
