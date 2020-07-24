const usersRouter = require('express').Router();
const { getAllUsers, createUser, getOneUser } = require('../controllers/users');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:userId', getOneUser);
usersRouter.post('/', createUser);

module.exports = usersRouter;
