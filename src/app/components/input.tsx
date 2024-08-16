import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'; 

interface Props {
    placeholder: string,
    idInput: string,
    isPassword: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function Input(props: Props) {
    const [showPassword, setShowPassword] = useState(!props.isPassword);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="input-container" style={{ position: 'relative' }}>
            <input 
                type={showPassword ? 'text' : 'password'}
                placeholder={props.placeholder}
                id={props.idInput}
                value={props.value}
                onChange={props.onChange}
                className="input-personalized"
            />
            {props.placeholder === 'Senha' && (
                <div 
                    style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '15px' }}
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? 
                        <EyeSlashIcon height={20} />:
                        <EyeIcon height={20} /> 
                    }
                </div>
            )}
        </div>
    );
}