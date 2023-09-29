
import { useSelector } from "react-redux";
import Add from "./Add";
import Delete from "./Delete";
import Show from "./Show";
import Update from "./Update";





const Display=()=>
{
   
    const {option}  = useSelector((state)=>state.options)
    return(
        <>  <div>Display:{option}</div>
        
             
           {option==='Home'?<Show/>:null}
           {option==='Add'?<Add/>:null}
           {option==='Update'?<Update/>:null}
           {option==='Delete'?<Delete/>:null}
        <div> 
       </div>
       </>
    );
}
export default Display;