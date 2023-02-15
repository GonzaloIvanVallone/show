const { User } = require('../db.js');
const bcrypt = require("bcrypt");

const getAllUsers = async (_req, res, next) => {
    try{
        const users = await User.findAll({attributes: {exclude: ['password']}});
        if(users.length){
            const finalUsers = users.filter(e => e.email !== "super@gmail.com")//exclude the super admin
            res.status(200).json(finalUsers);
        }else{
            res.status(400).json({ msg: 'Error, no users found'});
        }
    }catch(error){
        next(error)
    }
}

const createNewUser = async (req, res, next) => {
    const { body } = req;
    const salt = await bcrypt.genSalt(10);
    try{
        const myUser = {
            userName: body.userName,
            password: await bcrypt.hash(body.password, salt),
            email: body.email,
        };
        const [_user, created] = await User.findOrCreate({
            where: { email: myUser.email}, 
            defaults:{
                ...myUser,
            }
        });
        if(created === true){
            res.status(200).json({ msg : 'User stored correctly' });
        }else{
            res.status(400).json({ msg: 'Error, the user already exist'});
        }
    }catch(error){
        //next(error);
        res.status(400).json({ msg: 'Unexpected error'});
    }
}

const userLogin = async(req, res, next) =>{
    try{
        const user = await User.findOne({ where : {userName : req.body.userName, active: true }});
        if(user){
            const validatePassword = await bcrypt.compare(req.body.password,user.password);
            if(validatePassword){
                let payload = { "id": user.id, "email": user.email, "isAdmin": user.isAdmin, "name": user.userName};
                /*let token = jwt.sign(payload,JWT_KEY,{expiresIn: "1h"})
                let info = {...payload, token}*/
                res.status(200).json(payload);
            }else{
                res.status(400).json({msg: "Password Incorrect"});
        }
        }else{
            res.status(400).json({msg: "User does not exist"});
        }
    }catch(error){
        next(error)
    }
}
module.exports = {createNewUser, getAllUsers, userLogin}