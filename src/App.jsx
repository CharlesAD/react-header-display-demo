import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [name, setName] = useState("");

  return <Header name={name} />;
}

export default App;
