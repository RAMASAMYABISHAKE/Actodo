function Todoitem(probs){
const array = probs.array
const setarry =probs.setarry
function handledelete(removeid){
const temp =array.filter(function(item){
    if(removeid== item.id){
        return false
    }
    else{
        return true
    }
    
})
setarry (temp)
}


    return(<div className="flex justify-between"><p>{probs.index+1}.{probs.activity}</p> <button className=" text-red-500" onClick={()=>{handledelete(probs.id)}}>Delete</button></div> )
}
export default Todoitem