import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(probs){


    const navigate = useNavigate()

    const user = probs.user
    const setuser = probs.setuser
    const [euser, seteuser] = useState()
    const [epassword, setepassword] = useState()
    
    function handleUinput(eve) {
        seteuser(eve.target.value)
    }
    function handlePinput(eve) {
        setepassword(eve.target.value)
    }
    function adduser() {
       setuser([...user,{username:euser,password:epassword}])
       navigate('/')
       console.log(setuser)
    }



    return(<div className=" bg-black px-10 py-5  ">
<div className="bg-white p-5 border rounded-md ">
    <h1 className=" text-2xl font-medium ">Hey Hi</h1>
    <p>You can Signup here :)</p>
   <div className="flex flex-col gap-2 my-2"> <input onChange={handleUinput} className="border rounded-md p-1 w-52 bg-transparent" placeholder="usernme"></input>
    <input className="border rounded-md p-1 w-52 bg-transparent" onChange={handlePinput} placeholder="password"></input>
    <input className="border rounded-md p-1 w-52 bg-transparent" placeholder="confirm password"></input>
    <button className="bg-[#FCA201] p-1 w-24 border rounded-md" onClick={adduser}>Signup</button>

    
    <p>Already have an account? <Link to={'/'} className=" underline">Login</Link></p></div>
    
</div>
    </div>)
}
export default Signup