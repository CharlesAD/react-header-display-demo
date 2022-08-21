import renderer from "react-test-renderer";
import Products from "./Products";

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

it("renders correctly", () => {
  const rendered = renderer.create(<Products products={products} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
