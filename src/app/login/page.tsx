'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import logo from '../../../public/logo.png';
import Input from '../components/input';
import { Button } from '@/components/ui/button';


export default function Login() {

    const [loginInfos, setloginInfos] = useState({ email: '', password: ''});
    const router = useRouter()
    
    const handleLogin = async() => {
        await axios.post(`https://reqres.in/api/login`, {
            email: loginInfos.email,
            password: loginInfos.password
        })
        .then((response) => {
            router.push("/usuarios")
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return(
        <>
            <div className="flex flex-grow h-full">
                <div className="flex justify-center items-center w-1/2">
                    <h1 className="login-title text-center">
                        Simplificamos <br/>
                        juntos
                    </h1>
                    <span className="login-span">
                        Supply Chain | Industrial | Systems
                    </span>
                </div>
                <div className="flex justify-center items-center w-1/2 flex-col" style={{backgroundColor: '#fff', borderRadius:'12px'}}>
                    <div className='login-container'>
                        <img
                        className='login-logo'
                        src={logo.src}
                        />
                        <h1 className='my-5'>
                            Login
                        </h1>
                        <Input 
                        placeholder={'E-mail'} 
                        idInput={'email'} 
                        value={loginInfos.email}
                        onChange={(e: any) => setloginInfos({ ...loginInfos, email: e.target.value })}
                        isPassword={false}/>
                        <Input 
                        placeholder={'Senha'} 
                        idInput={'senha'}  
                        value={loginInfos.password}
                        onChange={(e: any) => setloginInfos({ ...loginInfos, password: e.target.value })}
                        isPassword={true}/>
                        <Button 
                        onClick={() => handleLogin()}
                        className='login-button'>
                            Logar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}