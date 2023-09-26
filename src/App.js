import * as React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index path='' element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route index element={<Outlet />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
