export const metadata = {
  title: {
    template:"%s | Calculator",
    default:"Calculator"
  }

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
