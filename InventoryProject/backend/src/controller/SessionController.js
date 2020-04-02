import * as Yup from "yup";

import User from "../models/user";

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: "Validation fails" });
    }

    const { username, password } = request.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return response.status(401).json({ error: "User not found" });
    }

    if(!(await user.checkPassword(password))) {
        return response.status(401).json({error: 'Password does not match'});
    }

    const { id, companyName } = user;
    
    return response.json({
        user: {
            id,
            companyName,
            username
        }
    });
  }
}

export default new SessionController();