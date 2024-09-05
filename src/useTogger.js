import { useState } from "react";

export const useTogol=(pop = false)=> {
 const [state , setState] = useState(pop)

 const Togol =()=>{
    setState((prev)=>!prev)
 }


 return {state , Togol }
}
