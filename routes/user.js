const { Router } = require('express');

const { usuariosGet } = require('../controllers/user');
const { usuariosPut } = require('../controllers/user');
const { usuariosPost } = require('../controllers/user');
const { usuariosDelete } = require('../controllers/user');
const { usuariosPatch } = require('../controllers/user');



const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;