import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ReorderIcon from '@mui/icons-material/Reorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import UserNav from './user-nav';



function Navbar({ user, ToogleSideMenu, sideMenu }) {
  const [showMenu, setShowMenu] = useState(false);
  // toggle the user-menu
  const toggleUserMenuActive = () => setShowMenu(!showMenu);
  return (
    <>
      <header className='bg-black text-white p-2'>
        <div className='py-2 group mx-auto flex items-center justify-between px-3 xs:px-1'>
          <div onClick={() => ToogleSideMenu(!sideMenu)} id="open-menu" className='flex shrink-0 items-center transition-opacity duration-1000 lg:hidden opacity-100'>
            <button className='bg-gray-900 text-gray-400 hover:bg-gray-800 cursor-pointer focus-ring-inset  inline-flex shrink-0 items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white sm:mr-3'>
              <span className='sr-only'>Toogle Sidebar</span>
              <ReorderIcon className='text-white shrink-0' />
            </button>
          </div>
          <div className='ml-2 flex flex-grow items-center space-x-2 lg:flex-1 cursor-pointer '>
            <div className='lg:flex hidden'>
              <Image src="/favicon.ico" alt='Code For Community' width={40} height={40} />
            </div>
            <Link href='/'>
              <span className='mr-1 text-xl font-semibold'>Code 4 Community</span>
            </Link>
          </div>

          {
            user ? (
              <div id="user-dashboard-login-image" className='lg:hidden flex  items-center transition-opacity duration-1000 gap-2  opacity-100'>
                <button type='button' className='hidden lg:visible'>
                  <span className='sr-only'>Open Dashboard</span>
                  <Link href='/dashboard' >
                    <span className='inline-flex items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white hover:bg-gradient-to-l lg:mx-4 bg-gradient-to-r from-indigo-500 to-cyan-600'>
                      Dashboard
                    </span>
                  </Link>
                </button>
                <button type='button'>
                  <span className='sr-only'>Open Notification</span>
                  <NotificationsNoneOutlinedIcon className='text-white' />
                </button>
                <div className='relative ml-4 flex-shrink-0 '>
                  <div>
                    <button onClick={toggleUserMenuActive} type='button' id='user-menu' className=' text-gray-400 hover:bg-gray-800 ml-1 flex shrink-0 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <Image loading='lazy' src={user?.picture} alt={user?.nickname} title={user?.nickname} width={40} height={40} className='rounded-full block object-cover ' />
                    </button>
                  </div>
                  {showMenu && (
                    <div role="menu" aria-orientation='vertical' aria-labelledby='user-menu' className='absolute right-0 mt-2 w-52 max-w-none origin-top-right rounded-md py-1 shadow-lg bg-gray-800 text-white ring-black z-[51] focus:outline-none'>
                      <Link href='/dashboard' target='_blank'>
                        <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                          DashBoard
                        </a>
                      </Link>
                      <Link href={`/user/${user?.nickname}`} target='_blank'>
                        <a className='block hover:bg-gray-700 px-4 py-2 text-sm w-full'>
                          View Profile
                        </a>
                      </Link>
                      <Link href='/settings' target='_blank'>
                        <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                          Settings
                        </a>
                      </Link>
                      <Link href='/api/auth/logout' className='group'>
                        <a className='block  text-red-700 hover:bg-gray-700 px-4 py-2 text-sm"'>Logout</a>
                      </Link>

                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='lg:hidden flex  items-center transition-opacity duration-1000 gap-2  opacity-100'>
                <button type='button'>
                  <span className='sr-only'>Open Login</span>
                  <Link href='/api/auth/login' >
                    <span className='inline-flex items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white bg-green-400'>
                      Login
                    </span>
                  </Link>
                </button>
              </div>

            )
          }



          <nav className='hidden flex-grow justify-center self-stretch transition-opacity lg:flex lg:flex-2 opacity-100'>
            <ul className='flex self-stretch font-medium transition-opacity'>
              <li className='flex items-center self-stretch px-3 opacity-80 cursor-pointer hover:opacity-100'>Courses</li>
              <li className='flex items-center self-stretch px-3 opacity-80 cursor-pointer hover:opacity-100'>Blogs</li>
              <li className='flex items-center self-stretch px-3 opacity-80 cursor-pointer hover:opacity-100'>Pricing</li>
              <li className='flex items-center self-stretch px-3 opacity-80 cursor-pointer hover:opacity-100'>Contact Us</li>
            </ul>
          </nav>


          <div id="user-dashboard-login-image" className=' hidden justify-end transition-opacity lg:mx-4 lg:flex lg:flex-1 lg:items-center opacity-100'>
            {
              user ? (
                <div id="user-dashboard-login-image" className='hidden lg:flex  items-center transition-opacity duration-1000 gap-2  opacity-100'>
                  <button type='button' className='hidden lg:visible'>
                    <span className='sr-only'>Open Dashboard</span>
                    <Link href='/dashboard' >
                      <span className='inline-flex items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white hover:bg-gradient-to-l lg:mx-4 bg-gradient-to-r from-indigo-500 to-cyan-600'>
                        Dashboard
                      </span>
                    </Link>
                  </button>
                  <button type='button'>
                    <span className='sr-only'>Open Notification</span>
                    <NotificationsNoneOutlinedIcon className='text-white' />
                  </button>
                  <div className='relative ml-4 flex-shrink-0 '>
                    <div>
                      <button onClick={toggleUserMenuActive} type='button' id='user-menu' className=' text-gray-400 hover:bg-gray-800 ml-1 flex shrink-0 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                        <span className='sr-only'>Open user menu</span>
                        <Image loading='lazy' src={user?.picture} alt={user?.nickname} title={user?.nickname} width={40} height={40} className='rounded-full block object-cover ' />
                      </button>
                    </div>
                    {showMenu && (
                      <div role="menu" aria-orientation='vertical' aria-labelledby='user-menu' className='absolute right-0 mt-2 w-52 max-w-none origin-top-right rounded-md py-1 shadow-lg bg-gray-800 text-white ring-black z-[51] focus:outline-none'>
                        <Link href='/dashboard' target='_blank'>
                          <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                            DashBoard
                          </a>
                        </Link>
                        <Link href={`/user/${user?.nickname}`} target='_blank'>
                          <a className='block hover:bg-gray-700 px-4 py-2 text-sm w-full'>
                            View Profile
                          </a>
                        </Link>
                        <Link href='/settings' target='_blank'>
                          <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                            Settings
                          </a>
                        </Link>
                        <Link href='/api/auth/logout' className='group'>
                          <a className='block  text-red-700 hover:bg-gray-700 px-4 py-2 text-sm"'>Logout</a>
                        </Link>

                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className='hidden lg:flex  items-center transition-opacity duration-1000 gap-2  opacity-100'>
                  <button type='button'>
                    <span className='sr-only'>Open Login</span>
                    <Link href='/api/auth/login' >
                      <span className='inline-flex items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white bg-green-400'>
                        Login
                      </span>
                    </Link>
                  </button>
                </div>

              )
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar