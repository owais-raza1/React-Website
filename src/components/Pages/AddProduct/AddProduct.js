import React from "react";
import { TextField, Box } from "@mui/material";
import Btn from "../../btn/Btn";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "10px 12px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },
  },
});

const AddProduct = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "auto",
        p: 3,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
      noValidate
      autoComplete="off"
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl mb-10 mt-4 font-bold hover:underline transition-all duration-1000">
        Add Selling Product
      </h1>
      <CustomTextField
        required
        id="product-title"
        label="Product Title"
        variant="outlined"
      />
      <CustomTextField
        required
        id="price"
        label="Price"
        variant="outlined"
        type="number"
      />
      <CustomTextField
        required
        id="product-description"
        label="Product Description"
        variant="outlined"
        multiline
        rows={4}
      />
      <input
        type="file"
        className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
      />
      <div className="mt-4">
        <Btn
          text="Post Add"
          variant="contained"
          className="text-white bg-[#0C6522] hover:bg-[#224b24] hover:transition-all duration-300"
        />
      </div>
    </Box>
  );
};

export default AddProduct;
