'use client'
import axios from 'axios';
import { UserIcon } from '@heroicons/react/20/solid'; 
import { useRouter } from 'next/navigation';

export default function LayoutDashboard({children} : any) {
    const router = useRouter();
    const logout = async() => {
        await axios.post('https://reqres.in/api/users/logout')
        .then(() => {
            router.push('/login')
        })
    }
    return (
        <>
            <div className="flex flex-grow h-full">
                <div className="flex flex-col justify-between w-1/5 p-5"
                style={{ backgroundColor: '#fff', borderRight:'8px solid #ececec'}}
                >
                    <span>
                        Usuários
                    </span>
                    <button 
                    onClick={() => { logout()}}
                    className='flex items-center justify-center'>
                        <UserIcon className='mr-2' height={20}/>
                        Logout
                    </button>
                </div>
                <div className="flex justify-center items-center w-4/5 flex-col"
                style={{ position: 'relative'}}
                >
                    <div className="topBar"/>
                    <div className="w-full h-full" >
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}