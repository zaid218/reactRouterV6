import { Link, NavLink } from "react-router-dom";
import classes from './Products.module.css'
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductPage = () => {
  return (
    <>
      <h1>productPage</h1>
      <h2>
        Go to home page <Link to="/home">Home page</Link>
      </h2>

      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`} >{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
