import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProductNav from "../../Navbar/AddProductNav";
import Footer from "../../Footer/Footer";

const ProductUpload = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <>
      <AddProductNav />
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Product List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="no-underline"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <img
                  className="w-full h-40 object-contain p-4 bg-gray-100"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {product.description.substring(0, 100)}...
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">
                    ${product.price}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductUpload;
