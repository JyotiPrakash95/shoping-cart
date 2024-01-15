import { useState } from "react";
import { createContext, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

// custom hook  and here we are manipulate the created context value
function useValue() {
    const value = useContext(itemContext);
    return value;
}

function CustomProviderComponent({children}) {
    // console.log(children);
        
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([])

      const handleAdd = (prod) => {
        // setTotal(total + price);

        const index = cart.findIndex((item) => item.id === prod.id);

        if (index === -1) {
          setCart([...cart, { ...prod, qty: 1 }]);
          console.log(cart);
          setTotal(total + prod.price);
        } else {
          cart[index].qty++;
          setCart(cart);
          setTotal(total + cart[index].price);
        }
        setItem(item + 1);
      };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price);
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
      setCart(cart)
    }
      };
  
      const handleReset =() =>{
          setTotal(0);
        setItem(0);
        setCart([]);
      }
  const toggle = () => {
        setShowCart(!showCart)
  }
  
    return (
      <itemContext.Provider
        value={{
          total,
          setTotal,
          item,
          setItem,
          handleAdd,
          handleRemove,
          handleReset,
          toggle,
          cart,
        }}
      >
        {showCart && <CartModal toggle={toggle} />}
        {children} {/* here we are render the all childrens */}
      </itemContext.Provider>
    ); 
}
export default CustomProviderComponent;
export { itemContext, useValue };