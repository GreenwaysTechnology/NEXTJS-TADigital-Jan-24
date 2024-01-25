// export default function AuthLayout({ children }) {
//     return <div id="authLayout">
//         {children}
//     </div>
// }


export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="authRootLayout">
                    {children}
                </div>
            </body>
        </html>
    );
}
