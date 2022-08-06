const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product
    }
    })
    .then(cats => {
      res.json(cats);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product
    }
  })
  .then(cat => {
    res.json(cat);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(new_cat => {
      res.json(new_cat);
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
    category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(up_cat => {
      res.json(up_cat);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(del_cat => 
    res.json(del_cat));
});

module.exports = router;
