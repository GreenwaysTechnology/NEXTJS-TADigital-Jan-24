import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href='/'>Home</Link>|
          <Link href='/profiles'>Profiles</Link> |
          <Link href='/todos'>Todos</Link> |
          <Link href='/posts'>Posts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
