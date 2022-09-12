import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Dashboard() {
  let products = [
    {
      "id": 1,
      "name": "Rice",
      "qty": 25,
      "price": 1300
    },
    {
      "id": 2,
      "name": "Soap",
      "qty": 15,
      "price": 120
    },
    {
      "id": 3,
      "name": "abc",
      "qty": 10,
      "price": 100
    }
  ];
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [plist, setPlist] = useState(products);
  // const[product,setProduct]=useState({
  //   "id":'',
  //   "name":'',
  //   "qty":'',
  //   "price":''
  // });
  let newProduct = {
    "id": parseInt(id),
    "name": name,
    "qty": parseInt(qty),
    "price": parseFloat(price)
  }
  const createProduct = (e) => {
    e.preventDefault();
    let size = plist.length;
    products.id = size + 1;
    products.push(newProduct);
    alert('Successfully new Product Created....');
    setPlist(products);
    console.log(products);

  }
  const deleteProduct = (id) => {
    const newList = plist.filter(p => p.id !== id);
    setPlist(newList);
    alert('successfully deleted product ' + id);
    Navigate('/dashboard');
  }
  const updateProduct = (e,id) => {
    console.log("product id "+id);
    e.preventDefault();
    plist.map(p=>{
      if(p.id===id){
        setId(p.id);
        setName(p.name);
        setQty(p.qty);
        setPrice(p.price);
      }

    })
    alert("calling update product...." + id);
   

  }

  const productList = plist.map(product => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.qty}</td>
        <td>{product.price}</td>
        <td>
          <button className='btn btn-primary' style={{ margin: "10px" }} onClick={(e)=>updateProduct(e,product.id)}>Edit</button>
          <button className='btn btn-danger' onClick={() =>deleteProduct(product.id)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (

    <div className='container'>
      <h1>Create Product</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputProductId" className="form-label">Enter Product Id</label>
          <input type="text" className="form-control" id="exampleInputProductId" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProductName" className="form-label">Enter Product Name</label>
          <input type="text" className="form-control" id="exampleInputProductName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputProductQty" className="form-label">Enter Product Quantity</label>
          <input type="text" className="form-control" id="exampleInputProductQty" value={qty} onChange={(e) => { setQty(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProductPrice" className="form-label">Enter Product Price</label>
          <input type="text" className="form-control" id="exampleInputProductPrice" value={price} onChange={(e) => { setPrice(e.target.value) }} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={createProduct}>Create</button>
      </form>
      <h1>Product List</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
      </table>
      <h1>Update Product</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputProductId" className="form-label">Enter Product Id</label>
          <input type="text" className="form-control" id="exampleInputProductId" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProductName" className="form-label">Enter Product Name</label>
          <input type="text" className="form-control" id="exampleInputProductName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputProductQty" className="form-label">Enter Product Quantity</label>
          <input type="text" className="form-control" id="exampleInputProductQty" value={qty} onChange={(e) => { setQty(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProductPrice" className="form-label">Enter Product Price</label>
          <input type="text" className="form-control" id="exampleInputProductPrice" value={price} onChange={(e) => { setPrice(e.target.value) }} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={updateProduct}>Update</button>
      </form>
    </div>
  )
}

export default Dashboard
