import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
      <>
        <h1>productPage</h1>
        <h2>
          go to home page <Link to="/home">Home page</Link>
        </h2>
      </>
    );
}
export default ProductPage;