function Card(probs) {
    return (<><div style={{ backgroundColor: probs.bgcolor }} className=" px-10 py-5 text-center border rounded-md flex-grow ">
        <h1 className=" font-medium text-2xl">{probs.title}</h1>
        <p>{probs.subtitle}</p></div></>)
}
export default Card