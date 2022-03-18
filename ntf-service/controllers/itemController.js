const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.getItems = async (req, res) => {
  const { search } = req.query;

  const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
  const limit = Number(req.query.limit) || 20;
  const skip = page * limit - limit;

  const findItemParams = {};

  if (search) {
    findItemParams.name = new RegExp(search, 'i');
  }

  const itemsPromise = Item.find(findItemParams)
    .sort({ created: 'desc' })
    .skip(skip)
    .limit(limit);

  const countPromise = Item.count();

  const [items, totalItems] = await Promise.all([itemsPromise, countPromise]);

  const previewPage = page - 1 > 0 ? page - 1 : null;
  const lastPage = Math.ceil(totalItems / limit);
  const nextPage = page + 1 <= lastPage ? page + 1 : null;

  return res.json({
    items,
    totalItems,
    paging: {
      nextPage,
      previewPage,
    },
  });
};

exports.getByItemId = async (req, res) => {
  const id = req.params.id.trim();

  const item = await Item.findById(mongoose.Types.ObjectId(id));

  return res.json({ item });
};
