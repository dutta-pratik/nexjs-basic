import Link from "next/link"
import { useEffect } from "react";
import {useRouter} from "next/router"

const NotAvailable = () => {

    const router = useRouter();
useEffect(()=>{
    setTimeout(()=>{
router.push("/")
    },3000)
},[])

    return ( <div className="not-found">
        <h1>Not found</h1>
        <p>
            Go back to <Link href="/">HomePage</Link>
        </p>
    </div> );
}
 
export default NotAvailable;