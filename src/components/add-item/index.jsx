import styles from "./style.module.css";
import { useState } from "react";
const AddItem = ({setItemsList}) => {
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
    pricePerQuantity: 0
  });

  const onNameChange = (e) => {
    setItem({ ...item, name: e.target.value });
  };

  const onQuantityChange = (e) => {
    setItem({ ...item, quantity: e.target.value });
  };

  const onPriceChangePerQunatity = (e) => {
    setItem({ ...item, pricePerQuantity: parseInt(e.target.value )});
  };

  const onFormSubmit = (e) => {
    console.log("The item ",item);
    e.preventDefault();
    setItemsList((prev)=>[...prev,{...item}])
    setItem({
      name: "",
      quantity: 0,
      pricePerQunatity: 0
    });
  };
  return (
    <div>
      <header className={styles.header}>Add Item</header>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <label>Item Name</label>
        <br />
        <input
          className={styles.input}
          type="text"
          value={item?.name}
          onChange={(e) => onNameChange(e)}
          required
        />
        <br />
        <br />
        <label>Quantity</label>
        <br />
        <input
          className={styles.input}
          type="number"
          value={item?.quantity}
          onChange={(e) => onQuantityChange(e)}
          required
        />
        <br />
        <br />
        <label>Price per Quantity</label>
        <br />
        <input
          className={styles.input}
          type="number"
          value={item?.pricePerQuantity}
          onChange={(e) => onPriceChangePerQunatity(e)}
          required
        />
        <br />
        <br />
        <input className={styles.btn} type="submit" value="Add Item"></input>
        <br />
      </form>
    </div>
  );
};

export default AddItem;
