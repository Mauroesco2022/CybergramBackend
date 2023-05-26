const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/auth');
const {validarcampos} = require('../middlewares/validar-campos');

router.post('/', loginUsuario)

router.post(
    '/new',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
        check('email' , 'El email es obligatorio').isEmail(),
        check('contraseña', ).isLength({min : 6}),
        
        validarcampos
    ],   
    crearUsuario )


module.exports = router;