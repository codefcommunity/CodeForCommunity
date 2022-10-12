import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../../components/navbar"

export default function DashBoard() {

    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            router.push('/dashboard')
        } else {
            router.push('/')
        }
    }, [router, user])


    return (
        <>
            <Navbar user={user} />
            <div className='text-start  font-mono p-10'>
                <h1>Dashboard</h1>
            </div>
        </>
    )
}