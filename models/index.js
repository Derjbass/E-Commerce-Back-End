// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, ProductTag, { foreignKey: 'product_id', targetKey: 'id'})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, ProductTag, { foreignKey: 'tag_id', targetKey: 'id'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
