const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
    }
  })
  .then(tags => {
    res.json(tags);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
    }
  })
  .then(tag => {
    res.json(tag);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(new_tag => {
      res.json(new_tag);
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name,
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(add_tag => {
    res.json(add_tag);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(del_tag => {
    res.json(del_tag);
  })
});

module.exports = router;
