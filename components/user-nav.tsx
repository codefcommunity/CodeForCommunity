import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';



export default function UserNav({ user }) {

    const [showMenu, setShowMenu] = useState(false);
    // toggle the user-menu
    const toggleUserMenuActive = () => setShowMenu(true);
    const toggleUserMenu = () => setShowMenu(false);

    return (
        <div id="user-dashboard-login-image" className=' hidden justify-end transition-opacity lg:mx-4 lg:flex lg:flex-1 lg:items-center opacity-100'>
            {user ? (
                <>
                    <button type='button'>
                        <span className='sr-only'>Open Dashboard</span>
                        <Link href='/dashboard' >
                            <span className='lg:inline-flex  hidden items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white hover:bg-gradient-to-l lg:mx-4 bg-gradient-to-r from-indigo-500 to-cyan-600'>
                                Dashboard
                            </span>
                        </Link>
                    </button>
                    <button type='button' className='hover:bg-slate-700 transition-all p-2 rounded-md'>
                        <span className='sr-only'>Open Notification</span>
                        <NotificationsNoneOutlinedIcon className='text-white' />
                    </button>
                    <div className='relative ml-4 flex-shrink-0 '>
                        <div>
                            <button onFocus={toggleUserMenuActive} onBlur={toggleUserMenu} type='button' id='user-menu' className=' text-gray-400 hover:bg-gray-800 ml-1 flex shrink-0 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                                <span className='sr-only'>Open user menu</span>
                                <Image loading='lazy' src={user?.picture} alt={user?.nickname} title={user?.nickname} width={40} height={40} className='rounded-full block object-cover ' />
                            </button>
                        </div>
                        {showMenu && (
                            <div role="menu" aria-orientation='vertical' aria-labelledby='user-menu' className='absolute right-0 mt-2 w-52 max-w-none origin-top-right rounded-md py-1 shadow-lg bg-gray-800 text-white ring-black z-[51] focus:outline-none'>
                                <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                                    <Link href='/dashboard'>DashBoard</Link>
                                </a>
                                <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                                    <Link href='/user'>View your Public Profile</Link>
                                </a>
                                <a className='block hover:bg-gray-700 px-4 py-2 text-sm"'>
                                    <Link href='/discord'>Join Discord Community</Link>
                                </a>
                                <a className='block hover:bg-gray-700 hover:text-red-500 px-4 py-2 text-sm"'>
                                    <Link href='/api/auth/logout'>Logout</Link>
                                </a>
                            </div>
                        )}
                    </div>
                </>

            ) : (
                <>
                    <button type='button'>
                        <span className='sr-only'>Open Login</span>
                        <Link href='/api/auth/login' >
                            <span className='inline-flex items-center rounded-md px-4 py-1.5 text-center text-base font-medium text-white bg-green-400'>
                                Login
                            </span>
                        </Link>
                    </button>
                </>
            )}
        </div>
    );
}
