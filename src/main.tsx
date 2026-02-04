import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

<Route path="/shop" element={<Shop />} />
<Route path="/products/:slug" element={<ProductPage />} />
