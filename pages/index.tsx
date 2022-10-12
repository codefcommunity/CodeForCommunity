import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useUser } from '@auth0/nextjs-auth0'


export default function Home() {

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Code For Community</title>
        <meta name="description" content="Code For Community is a non-profit organization that provides free coding courses to the community." />
        <meta name="tags" content="code, coding, community" />
      </Head>
      <main className='bg-slate-900'>
        <Navbar user={user} />

        {/* <Footer /> */}
      </main>
    </>
  )
}
