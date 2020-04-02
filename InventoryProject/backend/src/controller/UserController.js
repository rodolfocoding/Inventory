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

        const emailExists = await User.findOne({
            where: { email: request.body.email }
        });

        if (userExist) {
            return response.status(400).json({ error: "User already exists." });
        }

        if (emailExists) {
            return response.status(400).json({ error: "Email in use." });
        }

        const { id, companyName, email, username, area } = await User.create(
            request.body
        );

        return response.json({
            id,
            companyName,
            username,
            email,
            area
        });
    }
}

export default new UserController();
