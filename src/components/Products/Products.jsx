import PropTypes from "prop-types";

function createProductLIs(productsData) {
  return productsData.map((product) => (
    <li key={product.name}>
      {product.name} - {product.price}
    </li>
  ));
}

const products = [
  {
    price: "$49.99",
    name: "Test 1",
  },
  {
    price: "$9.99",
    name: "Test 2",
  },
  {
    price: "$29.99",
    name: "Test 3",
  },
];

export default function Products({ products }) {
  return <ul>{createProductLIs(products)}</ul>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
