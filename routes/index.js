const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'imagens'));
    },

    filename: function (req, file, cb) {
        cb(null,Date.now()+'-'+file.originalname);
    },
});

var upload = multer({storage:storage})




const IndexController = require('../controllers/Index');
const UsuarioController = require('../controllers/Usuario');
const RoteiroController = require('../controllers/Roteiro');
const comentarioRoteiroController = require('../controllers/Comentario');


router.get('/', IndexController.home);
router.get('/sobre', IndexController.sobre);

router.get('/pesquisa', IndexController.pesquisa);
router.post('/pesquisa', UsuarioController.buscar);

router.get('/criar-roteiro', RoteiroController.criaRoteiro);
router.post('/criar-roteiro', upload.any(), RoteiroController.criarRoteiro);
router.post('/comentar-roteiro/:id', comentarioRoteiroController.criarComentario);
router.post('/curtir-comentario/:id', comentarioRoteiroController.curtirComentarioRoteiro);


router.get('/roteiro/:id', RoteiroController.showRoteiro);


curtirComentarioRoteiro

module.exports = router;
