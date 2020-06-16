const {
    Roteiro,
    Estilo,
    Usuario
} = require('../models');

const moment = require ('moment')

const IndexController = {

    home: async (req, res) => {
        const roteiros = await Roteiro.findAll({
            include: [{
                    model: Usuario,
                    as: 'usuario',
                    required: true,
                }, {
                    model: Estilo,
                    as: 'estilo',
                    required: true,
                },
            ],
            order: [
                ['id', 'DESC'],
            ],
        });

        res.render('home', {
            titulo: 'Home',
            roteiros,
            moment,
        });
    },

    sobre: (req, res) => {
        res.render('sobre', {
            titulo: 'Sobre',
        });
    },

    pesquisa: (req, res) => {
        const { usuariosBusca } = res.locals;
        const { roteiros } = res.locals;

        res.render('Pesquisa', {
            titulo: 'Pesquisa',
            usuariosBusca,
            roteiros,
        });
    },
};

module.exports = IndexController;