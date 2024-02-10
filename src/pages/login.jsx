import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(probs) {

    const navigate = useNavigate()
    const user = probs.user
    const [euser, seteuser] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)
    function handleUinput(eve) {
        seteuser(eve.target.value)
    }
    function handlePinput(eve) {
        setepassword(eve.target.value)
    }
    var userfound = false
    function checkuser() {
        user.forEach(function (item) {
            if (item.username == euser && item.password == epassword) {
                console.log("login succesfull")
                userfound = (true)
                setruser(true)
                navigate('/landing',{state:{user:euser}})
            }
            if(userfound == false){
                setruser(false)
                console.log("loginfailed")
            }
            
        })
        
    }
    

    return (<div className=" bg-black px-10 py-5  ">
        <div className="bg-white p-5 border rounded-md ">
            <h1 className=" text-2xl font-medium ">Hey Hi</h1>
            {ruser ? <p>I help you manage your activities after you login:)</p> : <p className="text-red-500">please signup Before you login!!</p>}

            <div className="flex flex-col gap-2 my-2"> <input className="border rounded-md p-1 w-52 bg-transparent" placeholder="usernme" onChange={handleUinput}></input>
                <input className="border rounded-md p-1 w-52 bg-transparent" placeholder="password" onChange={handlePinput}></input>
                <button className="bg-[#8272DA] p-1 w-24 border rounded-md" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={'/signup'} className=" underline">Signup</Link></p></div>

        </div>
    </div>)
}
export default Login