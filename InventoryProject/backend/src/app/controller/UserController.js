import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      companyName: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required().min(6),
      email: Yup.string().email().required(),
      area: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExist = await User.findOne({
      where: { username: req.body.username },
    });

    if (userExist) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, companyName, email } = await User.create(req.body);

    return res.json({
      id,
      companyName,
      email,
    });
  }
}

export default new UserController();
