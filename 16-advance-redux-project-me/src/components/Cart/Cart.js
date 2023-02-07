import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartItemsList = (
    <ul>
      {cartItems.map((item) => {
        return (
          <CartItem
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
            }}
            key={item.title}
          />
        );
      })}
    </ul>
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItemsList}
    </Card>
  );
};

export default Cart;
