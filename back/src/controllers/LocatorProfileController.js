const connection = require('../database/connection')

module.exports ={
    async listLocator(request, response) {
        const locator_id = request.headers.authorization;

        const offers = await connection('offer')
        .where('locator_id', locator_id)
        .select('*');

        return response.json(offers);
    }

    // async listValue(request, response)  {

    //      const offers = await connection('offer').select('*')
    //      .where('value', '<=', 200);

    //     return response.json(offers);
    //  }

}