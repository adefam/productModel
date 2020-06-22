const Sequelize = require('sequelize');

const { Model } = Sequelize;

class Product extends Model {}

Product.init(
  {
    // attributes
    productId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    productName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    productType: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    quantity: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    description: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    purchasePrice: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    salePrice: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    image: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    user: {
      type: Sequelize.STRING,
      values: ['admin', 'user', 'super'],
      defaultValue: 'admin'
      // allowNull defaults to true
    }    
  },
  {
    sequelize,
    modelName: 'Product',
    // freezeTableName: true,
  }
);

const init = async () => {
  await Product.sync({ force: true }); // force true will drop the table if it already exists
  console.log('Tables have synced!');
};

init();

module.exports = Product;
