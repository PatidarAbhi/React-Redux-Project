
const INITIAL_STATE = {
    employee: [
      { id: 1, name: 'Abhi', lastName: 'patidar' },
      { id: 2, name: 'Chirag', lastName: 'tongia' },
      { id: 3, name: 'Rishi', lastName: 'raghuvanshi' },

    ],
  };

  function EmployeeReducer(state=INITIAL_STATE, action)
  {
    
    console.log("in emp::"+action);
       switch(action.type)
       {
       
          case 'ADDEMP':{
            
            return {
             employee:[...state.employee,action.payload]
            }
          }

          case 'DELETE':{
            const deletedEmployeeId = action.payload;
            const updatedEmployees = state.employee.filter(
              (employee) => employee.id !== deletedEmployeeId
            );
          
            return {
              ...state,
              employee: updatedEmployees,
          }
        }

          case 'UPDATE':{
            const deletedEmployeeId = action.payload;
            const updatedEmployees = state.employee.filter(
              (employee) => employee.id !== deletedEmployeeId
            );

            return {
              ...state,
              employee: updatedEmployees,
          }
       }
          default: return state;
       }
  }
  export default EmployeeReducer;