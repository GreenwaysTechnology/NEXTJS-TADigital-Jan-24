export default function Home() {

  const isValid = true
  if (isValid) {
    throw 'oops'
  }

  return <div>
    <h1>Home Page</h1>
  </div>
}