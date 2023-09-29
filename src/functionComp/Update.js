import { useSelector } from "react-redux";

const Update=()=>{
    const {employee}  = useSelector((state) => state.employeeState);
    const {option,id}  = useSelector((state)=>state.options)
    console.log("id in update "+id);
    const emp1 = employee.filter((emp) => emp.id === id)[0];
     
    return(
        <><div>Update function</div>
        <table border={"1"} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>lastName</th>
          </tr>
        </thead>
        <tbody>

            <tr>
              <td>{emp1.id}</td>
              <td>{emp1.name}</td>
              <td>{emp1.lastName}</td>
            </tr>
        </tbody>
      </table>

      </>

    );
}
export default Update;