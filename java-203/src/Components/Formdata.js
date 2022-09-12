import React, { useState } from 'react';
import Tabledata from './Tabledata';
import Productdata from './../data/Data.json';

function Formdata() {

  const [productData, setproductData] = useState(Productdata);

  const tableRows = productData.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.Pass}</td>
        <td>{info.Email}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalProducts = productData.length;
    data.id = totalProducts + 1;
    const updatedproductData = [...productData];
    updatedproductData.push(data);
    setproductData(updatedproductData);
  };



  return (
    <div className='container'>
      <Tabledata func={addRows} />
      <table className="table table-stripped border border-1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pass</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

    </div>
  )
}

export default Formdata
