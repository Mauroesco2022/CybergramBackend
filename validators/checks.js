const {validarCampos} = require('../middlewares/validar-campos')
const {emailExiste} = require('../helpers/db_validators')
const { check } = require('express-validator');

const ValidateUser = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('email').custom(emailExiste),
    check('password', ).isLength({min:6}),
    validarCampos
]
module.exports = {ValidateUser};