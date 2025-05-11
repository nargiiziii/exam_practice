import React from "react";

import { MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteBasket, increment } from "../redux/features/basketSlice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.allBasket);
  console.log(basket);
  const dispatch = useDispatch();

  return (
    <div style={{ paddingTop: "90px" }}>
      <h1>BASKET</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
            <th>price</th>
            <th>quantity</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.title}</td>
                <td>{prod.categpry}</td>
                <td>{prod.price}</td>
                <td style={{display:"flex", gap:"10px"}}><span onClick={()=> dispatch(decrement(prod._id))}>-</span><p>{prod.count}</p><span onClick={()=> dispatch(increment(prod._id))}>+</span></td>
                <td onClick={()=> dispatch(deleteBasket(prod._id))} style={{cursor:"pointer"}}>
                  <MdDelete size={25} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
