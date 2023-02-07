import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {
      title,
      price,
      quantity: 0,
      total: 0,
    };
    dispatch(cartActions.addQuantity(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
