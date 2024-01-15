import react from 'react';
import styles from "../styles/cart-modal.module.css"
import { useValue } from "../itemContext";


function CartModal({ toggle }) {
  const value = useValue();
  const {total, item,handleReset, cart } = value;
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleReset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {/* items */}
        {cart.map((item) => (
          <div className={styles.cartCard} key={item.id}>
            <h1>{item.name}</h1>
            <h3>X {item.qty}</h3>
            <h3>X {item.qty * item.price}</h3>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total: {item}</div>
        <div className={styles.totalPrice}>Price: {total}</div>
      </div>
    </div>
  );
}

export default CartModal;