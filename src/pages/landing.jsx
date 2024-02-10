import Card from "../components/card";
import Header from "../components/header";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom";


function Landing(){
    const data = useLocation()
    console.log(data)
    return(<div className=" bg-black pl-10 pr-10 pt-5 pb-5 ">
    <div className=" bg-[#EFEFEF] p-10 border rounded-md">
      <Header name={data.state.user} />
      <div className=" flex justify-between gap-7 my-5 flex-wrap ">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
        <Card  bgcolor={"#FD6663"} title={"February 10"} subtitle={"1:20:20"}/>
        <Card  bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}/>
      </div>
     <Todocontainer/>
      




    </div>

  </div>)
}
export default Landing