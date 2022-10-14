// @ts-ignore

import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from 'react'

async function CreateUser({ sessionUser }) {
  // console.log(sessionUser);
  if (sessionUser) {
    const res = await fetch('/api/User/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: sessionUser?.sid,
        name: sessionUser?.name,
        email: sessionUser?.email,
        picture: sessionUser?.picture,
        emailVerified: sessionUser?.email_verified,
      }),
    });
  }
}


export default function Home() {
  const [sideMenu, setSideMenu] = useState(false)

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (user) {
    CreateUser({ sessionUser: user });
  }

  return (
    <>
      <Head>
        <title>Code For Community</title>
        <meta name="description" content="Code For Community is a non-profit organization that provides free coding courses to the community." />
        <meta name="tags" content="code, coding, community" />
      </Head>
      <main >
        <Navbar user={user} sideMenu={sideMenu} ToogleSideMenu={sideMenu => (setSideMenu(sideMenu))} />
        <>
        </>
        {
          sideMenu ? (
            <div className='flex lg:hidden'>
              <h1>This is a side menu</h1>
            </div>
          ) : null
        }

        <Footer />
      </main>
    </>
  )
}
