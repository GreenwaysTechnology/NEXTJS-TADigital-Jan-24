'use client'
import { useRouter } from "next/navigation"

export default function Nav() {
    const router = useRouter()
    return <>
        <div>
            <button onClick={() => {
                router.push('/customer')
            }}>Customer</button>
            <button onClick={() => {
                router.push('/products')
            }}>Product</button>
        </div>

    </>
}