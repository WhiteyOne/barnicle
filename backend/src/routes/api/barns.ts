import { NextFunction, Request, Response } from 'express';
import { AuthReq } from "../../typings/express";
import { setTokenCookie, requireAuth, restoreUser } from "../../utils/auth";
import { handleValidationErrors } from '../../utils/validation';
// import Barn from "../../db/models"
const { check } = require('express-validator');
const bcrypt = require('bcryptjs');


const { Op } = require('sequelize')


import db from '../../db/models'
import { errors } from '../../typings/errors';
import { NoResourceError } from '../../errors/customErrors';

const { User, UserImage, Barn, Animal,Staff } = db


const router = require('express').Router();

// const validateBarn = []
//     check('name')
//         .isLength({min: 1},{max: })
//         .withMessage('Please provide a valid email.'),
//     check('username')
//         .isLength({ min: 4 })
//         .withMessage('Please provide a username with at least 4 characters.'),
//     check('username')
//         .not()
//         .isEmail()
//         .withMessage('Username cannot be an email.'),
//     check('password')
//         .isLength({ min: 6 })
//         .withMessage('Password must be 6 characters or more.'),
//     handleValidationErrors
// ];


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("did you find me?")

        let { page, size } = req.params
        if (!page) page = "1";
        if (!size) size = "10";

        const paginationObj = { limit: size, offset: parseInt(size) * (parseInt(page) - 1) }

        const allBarns = await Barn.findAll({
            include: [{ model: Animal },]
        })
        return res.json(allBarns)
    } catch (error) {
        next(error)
    }

});
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const barn = await Barn.findByPk(id,
            {include: [{ model:Staff, include:[]}, {model:Animal}]}
        )
        
        if(!barn){
            res.status(401)
            throw new Error("There is no barn with that id")
        }
        return res.json(barn)


    } catch (error) {
        next(error)
    }
})
router.post("/",async (req: Request, res: Response, next: NextFunction)=>{
    
    return "hello"
})

export = router;
