import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Update from "./Update";

const Show=()=>{
    const {employee}  = useSelector((state) => state.employeeState);
    const dispatch=useDispatch();
     const [empId ,setEmpId]=useState(null);
    function updateEmp(id) {
      console.log("id" + id);
      dispatch({type:"Update",payload:id});
      
    }
  
    function deleteEmp(id)
    {
      console.log("Delete"+id);
        dispatch({type:"DELETE" ,payload:id});
    }

    return(
       <> <div>Show function</div>
       <div>
      <h1>Employee List</h1>
      <table border={"1"} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>lastName</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={employee.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.lastName}</td>
              <button onClick={()=>deleteEmp(emp.id)}>Delete</button>
              <button onClick={()=>updateEmp(emp.id)}>Update</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
    );
}
export default Show;