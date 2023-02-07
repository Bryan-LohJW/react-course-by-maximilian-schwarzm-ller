import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="Another Test"
          price={1.5}
          description="This is a second product - superb!"
        />
      </ul>
    </section>
  );
};

export default Products;
