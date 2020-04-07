const connection = require('../database/connection')

module.exports = {

    async list(request, response) {
        const{page = 1} = request.query;

        const [count] = await connection('offer')
        .count();

        const offers = await connection('offer')
        .join('locator','locator.id','=','offer.locator_id')
        .limit(5)
        .offset((page-1) * 5)
        .select(['offer.*', 
        'locator.name', 'locator.email', 
        'locator.whatsapp', 'locator.city','locator.uf']);

        response.header('X-Total-Count', count['count(*)'])
        return response.json(offers);
    },

    async create(request, response){
        const{title, description, value, neighborhood, city, uf} = request.body;
        const locator_id = request.headers.authorization;

        const [id] = await connection('offer').insert({
            title,
            description,
            value, 
            neighborhood, 
            city, 
            uf,
            locator_id,
            
        });
        
        return response.json({ id });
    },
    async delete(request, response) {
        const {id} = request.params;
        const locator_id = request.headers.authorization;

        const offer = await connection('offer')
        .where('id', id)
        .select('locator_id')
        .first();

        if(offer.locator_id != locator_id){
            return response.status(401).json('Operação não autorizada')
        }

        await connection('offer').where('id', id).delete();

        return response.status(204).send();
    }
}