import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  deleteProducts,
  getProducts,
} from "../../redux/features/productSlice";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import { productSchema } from "../../schema/productSchema.js";

const Admin = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      desc: "",
      category: "",
    },
    onSubmit: (values) => {
      dispatch(addProducts(values));
      formik.resetForm();
      formik.handleReset();
    },
    validationSchema:productSchema
  });

  return (
    <div style={{ marginTop: "180px" }}>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="image"
          name="image"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
      {formik.errors ? <span>{formik.errors.image}</span> : null}


        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />

        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />

        <input
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
        />

        <button type="submit">Submit</button>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((prod) => (
              <tr key={prod._id}>
                <td>
                  <img
                    src={prod.image}
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                  />
                </td>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td>
                  <MdDelete
                    size={25}
                    onClick={() => dispatch(deleteProducts(prod._id))}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
