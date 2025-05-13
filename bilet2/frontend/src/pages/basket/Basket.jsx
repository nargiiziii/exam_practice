import React from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteBasket, increment } from "../../redux/features/basketSlice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.allBasket);

  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "180px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>quantity</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((prod) => (
              <tr key={prod._id}>
                <td>
                  <img src={prod.image} alt="" style={{width:"200px", height:"200px"}}/>
                </td>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>
                  <span onClick={() => dispatch(decrement(prod._id))}>-</span>
                  <p>{prod.count}</p>
                  <span onClick={() => dispatch(increment(prod._id))}>+</span>
                </td>
                <td>
                  <MdDelete size={25}  onClick={()=> dispatch(deleteBasket(prod._id))} style={{cursor:"pointer"}} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
