const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { name } = request.body;

    const ativo = 1

    const id = crypto.randomBytes(4).toString('HEX');

    const company_id = request.headers.authorization;

    const [number] = await connection("inventorys").insert({
      id,
      company_id,
      name,
      ativo
    });

    return response.json({ number });
  },

  async index(reques, response) {
    const inventorys = await connection('inventorys').select('*');

    return response.json(inventorys);
  }


};
