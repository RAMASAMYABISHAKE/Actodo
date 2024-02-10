import { useState } from "react"

function Addtodoform(probs){
  const array = probs.array
  const setarry = probs.setarry
const [newitem,setnewitem]=useState("")
function input(eve){
  setnewitem(eve.target.value)
}
function handleadd(){
setarry([...array,{id:array.length+1, activity:newitem}])
setnewitem([])
}

    return( <div className=" flex flex-col gap-3 ">
    <h1 className=" text-2xl font-medium">Manage Activities</h1>
    <div><input placeholder="New Activity?" className=" border border-black bg-transparent p-2  " value={newitem} onChange={input}></input> <button onClick={handleadd} className="border border-black p-2 bg-black text-white ">Add</button>
  </div></div>)
}
export default Addtodoform