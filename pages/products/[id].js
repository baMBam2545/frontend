import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Products = () => {
    const router = useRouter()
    const pathData = router.query
    return(
        <div>
            <h1>
            <center>Product ID: {pathData.id}</center>
            </h1>
            <br />
                <center>
                 <Link href="/"><a>Home</a></Link> | 
                 <Link href="/about"><a> about</a></Link> | 
                 <Link href="/service"><a> service</a></Link> | 
                 <Link href="/products/P001"><a> Products</a></Link> 
                </center>
        </div>
    )

}
export default Products