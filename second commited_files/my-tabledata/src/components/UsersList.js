import axios from 'axios';
import React, { Component } from 'react';
import "jquery/dist/jquery.min.js";
import"datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
   componentDidMount() {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
    //initialize datatable
   $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }
   render() {
    return (
      <div className='container'>
      <h1>Users List</h1>  
      <hr/>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
            </tr>
        </thead>
      
        <tbody>
            {this.state.data.map((result)=>{
                return(
                    <tr key={result.id}>
                        <td>
                            {result.id}
                        </td>
                        <td>{result.username}</td>
                        <td>{result.email}</td>
                    </tr>
                )
            })}

        
        </tbody> 
      </table>
      </div>
    )
  }
}

export default UsersList
