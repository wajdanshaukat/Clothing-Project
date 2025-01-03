import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./provider/cart/cart-provider";

import "./index.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </CartProvider>
);
