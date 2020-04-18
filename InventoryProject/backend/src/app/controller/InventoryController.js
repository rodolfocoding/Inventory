import * as Yup from 'yup';
import Inventory from '../models/Inventory';

class InventoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      inventoryName: Yup.string().required(),
      userId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, inventoryName, userId } = req.body;

    const inventorys = await Inventory.create({
      id,
      inventoryName,
      userId,
    });

    return res.json(inventorys);
  }

  async index(req, res) {
    const inventorys = await Inventory.findAll({
      attributes: ['inventoryName'],
      where: {
        userId: req.body.userId,
      },
    });

    return res.json(inventorys);
  }

  async delete(req, res) {
    await Inventory.destroy({
      where: {
        id: req.body.id,
      },
    });

    return res.status(200).json({ message: 'Iventory excluded' });
  }
}

export default new InventoryController();
