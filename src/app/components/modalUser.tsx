import axios from "axios";
import Input from "./input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
    isDialogOpen: boolean;
    setIsDialogOpen: Function;
    uniqueUser: any;
    setUniqueUser: Function;
}

export default function ModalUser(props: Props) {    
    const EditUser = async (idUser: number) => {
        await axios.patch(`https://reqres.in/api/users/${idUser}`, {
            email: props.uniqueUser.email,
            first_name: props.uniqueUser.first_name,
            last_name: props.uniqueUser.last_name,
        })
        .then((response) => {
            console.log(response);
        });
    };

    return (
        <Dialog open={props.isDialogOpen} onOpenChange={(isOpen) => props.setIsDialogOpen(isOpen)}>
            <DialogContent className="sm:max-w-[425px] flex flex-col md:max-w-[880px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-grow h-full">
                    <div className="flex justify-center w-1/2 flex-col">
                        <Input 
                            placeholder={'Primeiro nome'} 
                            idInput={'primeiro_nome'} 
                            isPassword={false}
                            value={props.uniqueUser.first_name}
                            onChange={(e: any) => props.setUniqueUser({ ...props.uniqueUser, first_name: e.target.value })}
                        />
                        <Input 
                            placeholder={'E-mail'} 
                            idInput={'email_user'} 
                            isPassword={false}
                            value={props.uniqueUser.email}
                            onChange={(e: any) => props.setUniqueUser({ ...props.uniqueUser, email: e.target.value })}
                        />
                        <Button 
                        onClick={() => { EditUser(props.uniqueUser.id)}}
                        className="basic-button">
                            Atualizar
                        </Button>
                    </div>
                    <div className="flex items-center w-1/2 flex-col">
                        <Input 
                            placeholder={'Segundo nome'} 
                            idInput={'segundo_nome'} 
                            isPassword={false}
                            value={props.uniqueUser.last_name}
                            onChange={(e: any) => props.setUniqueUser({ ...props.uniqueUser, last_name: e.target.value })}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}