import Profile from "components/Profile/Profile";
import { useState } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import Form from "./components/Form/Form";

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  const [name, setName] = useState({ name: "" });

  return (
    <>
      <h1 className=" ">Hello {name}</h1>;
      {name && <Profile name={name} imgUrl={imgUrl} />}
      <Form setName={setName} />
      <Products products={products} />
    </>
  );
}

export default App;
