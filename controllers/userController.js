const User = require('../models/userModel.js');

// home endpoint method
exports.home = (req, res) =>{
    res.send('<h1>User Management Backend Application </h1>');
}

// user register endpoint method 
exports.register = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        // checking for required data is given or not
        if(!name || !email || !password){
            throw new Error(`Error: name Or email or password is required`);
        }

        // checking for user already exists or not
        const userExist = await User.findOne({email});
        if(userExist){
            throw new Error(`User already exist`);
        }

        // check password length is greater than 7 or not
        if(password.length < 8){
            throw new Error(`Password length must be more than 7`);
        }

        // regular expression pattern to make password strong
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$^&*]{8,}$/
        const result = regex.test(password);

        // check password follows regex or not
        if(!result){
            throw new Error("password must contain atleast one special character, one number, One uppercase letter and One lowercase letter");
        }
        
        // creating new user with given data
        const user = await User.create({
            name,
            email,
            password
        })
        // response after registeration
        res.status(201).json({
            success: true,
            message: "User registered successfully",
        })
    } catch (error) {
        // Error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// user login endpoint method
exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            throw new Error(`User does not exist`);
        }
        else{
            if(userExist.password === password){
                res.status(200).json({
                    success: true,
                    message: "User login successfully"
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "Password is wrong"
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}