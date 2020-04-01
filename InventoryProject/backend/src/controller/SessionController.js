const connection = require("../database/connection");
const crypto = require("crypto"); //LIB NATIVA DO NODE
const bcrypt = require("bcrypt");

module.exports = {
  //CRIAR USUÁRIO
  async createUser(request, response) {
    const { company, username, password, email, area } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    const hash = bcrypt.hashSync(password, 10);

    const ativo = 1;

    const validaUsername = await connection("users")
      .where("username", username)
      .select("username")
      .first();

    if (!validaUsername) {
      await connection("users").insert({
        id,
        company,
        username,
        password:hash,
        email,
        area,
        ativo
      });
      return response.json({ id });
    }
    return response.status(400).json({ error: "Erro ao cadastrar." });
  },

  async login(request, response) {
    const { username, password } = request.body;

    const autenticarUsuario = await connection("users")
      .where("username", "=", username, "passsword", "=", password)
      .select("company")
      .first();

    if (!autenticarUsuario) {
      return response.status(400).json({ error: "Usuário não encontrado" });
    }
    return response.json(autenticarUsuario);
  }
};


