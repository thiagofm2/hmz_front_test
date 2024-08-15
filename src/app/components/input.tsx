
interface Props {
    placeholder: string,
    idInput: string,
    isPassword: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function Input(props : Props) {
    return (
        <>
            <div className="input-container">
                <input 
                type={props.isPassword? 'password' : 'text'}
                placeholder={props.placeholder}
                id={props.idInput}
                value={props.value}
                onChange={props.onChange}
                className="input-personalized"/>
            </div>
        </>
    )
}