import Link from "next/link"

const Navbar = () => {
    return ( <>
    <h1>Ninja List</h1>
    <Link href="/"><a>
        Home
    </a></Link>
    <Link href="/about"><a>
        About
    </a></Link>
    <Link href="/ninjas"><a>
        NinjaList
    </a></Link>
    </> );
}
 
export default Navbar;