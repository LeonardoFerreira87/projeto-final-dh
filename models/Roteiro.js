/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Roteiro = sequelize.define('Roteiro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estilo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        data_criacao: {
            type: DataTypes.DATE,
            allowNull: true,
            unique: true,
        },
        qntd_dias: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        tableName: 'roteiro',
        timestamps: false,
    });

    Roteiro.associate = models => {
        Roteiro.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario',
        });

        Roteiro.belongsTo(models.Estilo, {
            foreignKey: 'estilo_id',
            as: 'estilo',
        });

        Roteiro.hasMany(models.Dia, {
            foreignKey: 'roteiro_id',
            as: 'dia',
        });

        Roteiro.hasMany(models.ImagemRoteiro, {
            foreignKey: 'roteiro_id',
            as: 'imagens',
        });
        Roteiro.hasMany(models.Comentario, {
            foreignKey: 'roteiro_id',
            as: 'comentario',
        });

        Roteiro.hasMany(models.Curtida, {
            foreignKey: 'roteiro_id',
            as: 'curtida',
        });
    };

    return Roteiro;
};
