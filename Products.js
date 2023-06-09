import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const productArray = [
    {id: 1, price: 6 ,title: "Text Book" , description: "My First Text Book"},
    {id: 2, price: 10 ,title: "Practice Book" , description: "My First Practice Book"}
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productArray.map((product) => {
          return (<ProductItem
          key = {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />);
        })}
        
      </ul>
    </section>
  );
};

export default Products;
