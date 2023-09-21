import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <>
        <h2>Home Page</h2>
        <h1>
          Go to <Link to="/products">products</Link>
        </h1>
      </>
    );
}
export default HomePage;