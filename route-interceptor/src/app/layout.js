import "./globals.css";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
