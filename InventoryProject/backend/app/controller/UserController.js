import * as Yup from "yup";
import User from "../models/user";

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      companyName: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      email: Yup.string()
        .email()
        .required(),
      area: Yup.string().required()
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: "Validations fail" });
    }

    const userExist = await User.findOne({
      where: { username: request.body.username }
    });

    if (userExist) {
      return res.status(400).json({ error: "User already exists." });
    }

    const { id, companyName, username, password, email, area, ativo = 1 } = await User.create(request.body);

    return response.json({
        id,
        companyName,
        username,
        password,
        email,
        area,
        ativo
    });
  }
}

export default new UserController();