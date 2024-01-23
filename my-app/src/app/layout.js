

// export default function RootLayout({props}) {

//   return (
//     <html lang="en">
//       <body>{props.children}</body>
//     </html>
//   );

// }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div id="rootlayout">
          {children}
        </div>
      </body>
    </html>
  );

}