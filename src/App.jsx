import React from "react";
import { Header } from "./components/Body-component/Header";
import { Footer } from "./components/Body-component/Footer";
import { Main } from "./components/Body-component/Body";
import "./styles/main.scss";
import { ProductList } from "./components/Product-component/ProductList";

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <ProductList />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
