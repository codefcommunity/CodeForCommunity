
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";


function Greet({ user }) {
    // greet the user
    const Time = new Date().getHours();
    let Greeting = "Hello";
    if (Time < 12) {
        Greeting = "Good Morning";
    }
    else if (Time < 18) {
        Greeting = "Good Afternoon";
    }
    else {
        Greeting = "Good Evening";
    }
    return (
        <div className="py-10">
            <h1 className="text-3xl">{Greeting}, {user?.name}</h1>
        </div>
    )
}

export default function DashBoard() {
    const [sideMenu, setSideMenu] = useState(false)

    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        if (!user) {
            router.push('/api/auth/login')
        }
    }, [router, user])


    return (
        <>
            <Navbar user={user} sideMenu={sideMenu} ToogleSideMenu={sideMenu => (setSideMenu(sideMenu))} />
            <div>
                <div>
                    {sideMenu &&
                        <span>
                            This is a side menu Bar
                        </span>
                    }
                </div>
                <div>
                    <div>
                        <Greet user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}