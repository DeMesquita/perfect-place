const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    async list(request, response) {
        const locators = await connection('locator').select('*');
        return response.json(locators);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(3).toString('HEX');

        await connection('locator').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({id});
        }
};