const Navbar =()=>{
    return(
        <nav className="flex justify-between px-10 pt-3">
<div>
    <h1 className=" text-amber-500 items-center font-semibold">
        E - <span className="text-purple-500">Commerce</span>
    </h1>
</div>

<div>
    <ul className="flex gap-3 ">
        <li>Home</li>
        <li>Products</li>
    </ul>
</div>
        </nav>
    )
}

export default Navbar