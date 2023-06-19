import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Error handling
    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    // check for duplicate email from controller.
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
        throw new BadRequestError('User already exists');
    }

    const user = await User.create({ name, email, password });
    res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
    res.send('login user');
};

const updateUser = async (req, res) => {
    res.send('updateUser');
};

export { register, login, updateUser };
