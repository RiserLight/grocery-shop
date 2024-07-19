import styles from "./style.module.css";

const ItemList = ({ itemsList }) => {
  return (
    <div>
      <header>Items List</header>
      {itemsList.length > 0 &&
        itemsList.map((item, index) => (
          <li key={index} className={styles.container}>
            <span>{item?.name} </span> <span>{item?.quantity}</span>{" "}
            <span>{item?.pricePerQuantity} </span>
            <span>{item?.quantity * item?.pricePerQuantity}</span>
          </li>
        ))}
    </div>
  );
};

export default ItemList;
