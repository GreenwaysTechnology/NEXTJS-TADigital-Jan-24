
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="rootLayout">
          {children}
        </div>
      </body>
    </html>
  );
}
