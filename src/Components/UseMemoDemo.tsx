
import React, { useState, useMemo } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Laptop Bag", price: 1500 },
  { id: 5, name: "Keyboard", price: 1200 },
  { id: 6, name: "Mouse", price: 800 },
];

function UseMemoProducts() {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  // Filter products only when search changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <h1>Product Search - useMemo</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Products</h2>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}

      <hr />

      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(c => c + 1)}>
        Increment Counter
      </button>
    </>
  );
}

export default UseMemoProducts;
