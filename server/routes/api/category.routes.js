const router = require('express').Router();
const { Category, Product } = require('../../db/models');

router.route('/').get((req, res) => {
  Category.findAll()
    .then((allCategories) => res.json({ categories: allCategories }))
    .catch((error) => res.status(500).json(error));
});

router.route('/getAll/:id').get((req, res) => {
  const { id } = req.params;
  // console.log(id, 'this is ID FROM CLIENT');
  Category.findAll({ where: { id }, include: [Product] })
    .then((categoryProducts) => res.json({ products: categoryProducts }))
    .catch((error) => res.status(500).json(error));
});

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const { page, pageSize, sortBy, sortOrder } = req.query;

    const offset = (page - 1) * pageSize;
    const defaultSortBy = 'id';
    const defaultSortOrder = 'ASC';

    const validSortColumns = ['title', 'price'];
    const validatedSortBy = validSortColumns.includes(sortBy)
      ? sortBy
      : defaultSortBy;
    const validatedSortOrder = ['ASC', 'DESC'].includes(sortOrder)
      ? sortOrder
      : defaultSortOrder;

    const categoryProducts = await Category.findAll({
      where: { id },
      include: [
        {
          model: Product,
          offset,
          limit: pageSize,
          order: [[validatedSortBy, validatedSortOrder]],
        },
      ],
    });

    res.json({ products: categoryProducts[0]?.Products || [] });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
