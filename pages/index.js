import Link from 'next/link'

function Home() {
  return (<div>
    <center>
      <h1>Home</h1>
      <Link href="/about">
        <a>About Four Eyes Apps</a>
      </Link>
    </center>
  </div>)
}


export default Home