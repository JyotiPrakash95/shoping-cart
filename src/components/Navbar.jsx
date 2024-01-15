import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const value = useValue();
  const { total, item, handleReset, toggle } = value;
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
        <button className={styles.Button} onClick={toggle}>
          Cart
        </button>

        <button className={styles.Button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
