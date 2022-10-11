import Head from 'next/head'
import Image from 'next/image'

export default function Home(props) {
  console.log('Hello World')
  return (
    <>
      <Head>
        <title>Code For Community</title>
        <meta name="description" content="Code For Community is a non-profit organization that provides free coding courses to the community." />
        <meta name="tags" content="code, coding, community, free, courses, learn, programming, html, css, javascript, react, nextjs, nodejs, python, java, c++, c#" />
      </Head>
      <main>
        <>
        <div className='text-start bg-black text-white font-mono p-10'>
          <h1>Code For Community</h1>
          <h2>Learn to code for free</h2>
          <p>Code For Community is a non-profit organization that provides free coding courses to the community.</p>
          <p>Our mission is to provide free coding courses to the community.</p>

        </div>
        </>
      </main>
    </>
  )
}
