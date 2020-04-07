const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {id} = request.body;

        const locator = await connection('locator')
        .where('id', id)
        .select('name')
        .first()

        if(!locator){
            return response.status(400).json({ error: 'Locador não encontrado'});
        }
        return response.json(locator);
    }
}