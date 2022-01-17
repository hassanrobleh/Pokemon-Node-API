import { User } from '../db/sequelize.js'
import bcrypt from 'bcrypt'

const login = (app) => {
    app.post('/api/login', (req, res) => {
        User.findOne({ where: {username : req.body.username}})
            .then(user => {
                bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                    if(isPasswordValid) {
                        const message = `L'utilisateur a été connecté avec succès`
                        res.json({message, data: user})
                    }
                })
            })
    })
}

export default login