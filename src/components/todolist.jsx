
import Todoitem from "./todoitem"

function Todolist(probs){

const array = probs.array
const setarry = probs.setarry


    return( <div className="bg-[#BDB4EA] p-2 border rounded-md flex-grow">
    <h1 className=" text-2xl font-medium">Todays Activity</h1>
    
    {array.length==0?<p>You havn't add anything</p>:""}
    {
       array.map(function(item,index){
       return <Todoitem activity={item.activity} id={item.id} index={index} array={array} setarry={setarry}/>
       }) 
        }

    
</div>)
}
export  default Todolist 