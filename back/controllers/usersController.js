const User = require('../models/User');
const asyncHandler = require('express-async-handler');

//@desc Create new user
//@route POST /api/user
//@access PUBLIC

const createNewUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400)
        throw new Error('User already exist');
    }
    
    const user = new User({
        name,
        email,
        password
    });
    const result = await user.save();
    res.status(200).send(result);

});

module.exports = createNewUser