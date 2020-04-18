import * as Yup from 'yup';
import Item from '../models/Item';

class ItemController {
  async index(req, res) {
    const item = await Item.findAll({
      attributes: ['itemName', 'quantidade'],
      where: {
        inventoryId: req.body.inventoryId,
      },
    });

    return res.json(item);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      itemName: Yup.string().required(),
      quantidade: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const itemExists = await Item.findOne({
      where: {
        itemName: req.body.itemName,
        inventoryId: req.body.inventoryId,
      },
    });

    if (itemExists) {
      return res.status(400).json({ error: 'Item already exists.' });
    }

    const { id, itemName, quantidade, inventoryId } = await Item.create(
      req.body
    );

    return res.json({
      id,
      itemName,
      quantidade,
    });
  }

  async delete(req, res) {
    await Item.destroy({
      where: {
        id: req.body.id,
      },
    });

    return res.status(200).json({ message: 'Item excluded' });
  }
}

export default new ItemController();
