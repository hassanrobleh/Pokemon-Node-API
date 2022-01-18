import { User } from '../db/sequelize.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import privateKey from '../auth/private_key.js'

const login = (app) => {
    app.post('/api/login', (req, res) => {
        User.findOne({ where: {username : req.body.username}}).then(user => {
            if(!user) {
                const message = `L'utilisateur demandé n'existe pas.`
                return res.status(404).json({message})
            }
            bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if(!isPasswordValid) {
                    const message = `Le mot de passe est incorrect.`
                    return res.status(401).json({message, data: user})
                } 

                //JWT
                const token = jwt.sign(
                    { userId: user.id },
                    privateKey,
                    { expiresIn: '24' }
                )

                const message = `L'utilisateur a été connecté avec succès`
                return res.json({message, data: user, token})
            })


        }).catch(error => {
            const message = `L'utilisateur a pas pu être connecté. Réessayez plutard.`
            res.status(500).json({message, data: error})
        })
    })
}

export default login