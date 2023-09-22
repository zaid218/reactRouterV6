import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate=useNavigate()
  const navigateHandler = () => {
    navigate('/products')
  }
    return (
      <>
        <h2>Home Page</h2>
        <h1>
          Go to <Link to="/products">products</Link>
        </h1>
        <button onClick={navigateHandler}>Go to Products</button>
      </>
    );
}
export default HomePage;