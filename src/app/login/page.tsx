'use client'

import logo from '../../../public/logo.png';
import Input from '../components/input';
export default function Login() {
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
                        <Input placeholder={'E-mail'} idInput={'email'} onChange={() => {}}  isPassword={false}/>
                        <Input placeholder={'Senha'} idInput={'senha'}  onChange={() => {}}  isPassword={true}/>
                        <button className='login-button'>
                            Logar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}