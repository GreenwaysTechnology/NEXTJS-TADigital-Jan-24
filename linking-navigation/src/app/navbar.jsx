import Link from 'next/link'
export default function NavBar() {
    return <nav>
        <Link href={{ pathname: '/customer' }}>Customer</Link> |
        <Link href={{ pathname: '/products' }}>Products</Link> |
        <Link href={{ pathname: '/dashboard' }}>Dashboard</Link>
    </nav>
}