const menuModel = require('../models/menu.js')
const restauranteModel = require('../models/restaurante.js');

/* Essa função precisa ser async/await pois existe uma chamada ao banco de dados que precisa esperar o retorno */
module.exports.salvar = async function(req, res) {
    const { nome } = req.body;
    const { restaurante_id } = req.params;

    /* Antes de salvar de fato o menu, deve-se identificar se o restaurante enviado por parâmetro na URI existe de fato. */
    const restaurante = await restauranteModel.findByPk(restaurante_id);

    /* Se não existir, irá responder com 400 */
    if(!restaurante) {
        return res.send(400, {error: 'Restaurante não encontrado.'});
    }

    return new Promise((resolve, reject) => {
        
        /* Precisa informar ao model do restaurante qual a associação com a tabela */
        menuModel.associate(restauranteModel);

        menuModel.create({nome, restaurante_id}).then(response => {
            resolve(response);
        }).catch(erro => {
            reject(erro);
        })
    });
}

module.exports.buscarTodos = function() {

    return new Promise((resolve, reject) =>{
        menuModel.findAll().then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    });
}