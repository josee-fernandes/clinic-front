import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="border bg-red-500 text-white">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Next.js application.</p>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
