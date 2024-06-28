import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Container, Box } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
    <Container maxWidth="lg">
      <Box
        sx={{
          p: 4,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: 1,
          backgroundColor: "#fff",
          mt: 4,
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain max-h-96"
              style={{ height: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Typography variant="h4" component="h2" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              ${product.price}
            </Typography>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ProductDetail;
