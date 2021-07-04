import Link from "next/link"

const NotAvailable = () => {
    return ( <div className="not-found">
        <h1>Not found</h1>
        <p>
            Go back to <Link href="/">HomePage</Link>
        </p>
    </div> );
}
 
export default NotAvailable;