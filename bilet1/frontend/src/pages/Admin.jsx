import React, { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import { addProducts, deleteProducts } from "../redux/features/productSlice";

const Admin = () => {
  const products = useSelector((state) => state.products.allProducts);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      title: "",
      category: "",
      price: "",
      desc: "",
    },
    onSubmit: (values) => {
      dispatch(addProducts(values));
      resetForm();
      setOpen(false);
    },
  });

  return (
    <div style={{ paddingTop: "90px" }}>
      <h1>ADMIN</h1>

      <button onClick={() => setOpen(!open)}>create</button>

      {open && (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
          <input
            type="text"
            placeholder="category"
            name="category"
            onChange={handleChange}
            value={values.category}
          />
          <input
            type="text"
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={values.price}
          />

          <input
            type="text"
            placeholder="desc"
            name="desc"
            onChange={handleChange}
            value={values.desc}
          />
          <button type="submit">submit</button>
        </form>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
            <th>price</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.title}</td>
                <td>{prod.categpry}</td>
                <td>{prod.price}</td>
                <td
                  onClick={() => dispatch(deleteProducts(prod._id))}
                  style={{ cursor: "pointer" }}
                >
                  <MdDelete size={25} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
