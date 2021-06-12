const bcrypt = require("bcrypt");
require("../Node.Js-sample-project-structure/node_modules/dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../Models/user");


const createLink = (req, res, next) => {
	
}


const updateLink = (req, res, next) => {

}

const deleteLink = (req, res, next) => {

}



export const LinkControllers = {
    createLink,
    updateLink,
    deleteLink
}