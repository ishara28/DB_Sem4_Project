import React from "react";

function ShowCartItems({ products, remove,changeQty}) {
  let productList = products.map(product => {
    return (
      <div class="row card" key={product.product_id}>
        <div class="col s12 m4 l4">
          <h4>{product.name}</h4>
        </div>

        <div class=" col s12 m4 l4" >
          <h4>X {product.qty}</h4>
          <div>
            <button  className="btn sm" name="-" onClick={(e)=>{changeQty(product.product_id,e)}}>
              -
            </button>
            <button style={{ margin: "0px 25px" }} className="btn sm" name="+" onClick={(e)=>{changeQty(product.product_id,e)}}>
              +
            </button>
          </div>
        </div>

        <div className="center col s12 m4 l3" >
          <h4>{product.qty * 100}</h4>
        </div>

        <div className="col s12 m4 l1" >
          <div style={{marginTop:"25px"}}>
            <button className="btn sm" onClick={(e)=>{remove(product.product_id)}}>x</button>
          </div>
        </div>
      </div>
    );
  });

  return <div>{productList}</div>;
}


export default ShowCartItems;
