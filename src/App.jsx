import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import AddItem from "./components/add-item";
import ItemList from "./components/item-list";

import { useState } from "react";
const App = () => {
  const [itemsList, setItemsList] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Header />
      <AddItem setItemsList={setItemsList}/>
      <ItemList itemsList={itemsList} />
      <Footer />
    </div>
  );
};

export default App;
