const article = require('../managers/articleManager');

module.exports = {
    show: async (req, res) =>{
        let data = await article.getList();    
        res.json(data);
    },

    get: async (req, res) => {
        let id = req.params.id;
        let data =  await article.getOne(id);
        res.json(data);
    }

}