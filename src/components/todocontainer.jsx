import Addtodoform from "./addtodoform"
import Todolist from "./todolist"
import { useState } from "react"
function Todocontainer(){

    const [array,setarry]=useState([
        {
            id:1,
            activity:"Go for a Walk"
        },
        {
            id:2,
            activity:"Take rest"
        },
        {
            id:3,
            activity:"Take bath"
        }
    ]
    )
    return( <div className=" flex gap-5 flex-wrap">
       <Addtodoform array={array} setarry={setarry}/>
       <Todolist array={array} setarry={setarry}/>
        </div>)
}
export default Todocontainer