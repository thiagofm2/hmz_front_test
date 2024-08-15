import {Modal, ModalContent, ModalBody} from "@nextui-org/modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Input from "./input";

interface Props {
    onShow: boolean,
    onClose: Function,
    userId: Object
}

export default function ModalUser({buttonChild} : any, props: Props) {
    return(
            <Dialog>
                <DialogTrigger asChild>
                    {buttonChild}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                    <div className="flex flex-grow h-full">
                        <div className="flex justify-center items-center w-1/2">
                            <Input placeholder={'Primeiro nome'} idInput={'primeiro_nome'} value={''} onChange={() => {}} isPassword={false}/>
                            <Input placeholder={'Primeiro nome'} idInput={'primeiro_nome'} value={''} onChange={() => {}} isPassword={false}/>
                        </div>
                        <div className="flex justify-center items-center w-1/2">
                            <Input placeholder={'Primeiro nome'} idInput={'primeiro_nome'} value={''} onChange={() => {}} isPassword={false}/>
                            <Input placeholder={'Primeiro nome'} idInput={'primeiro_nome'} value={''} onChange={() => {}} isPassword={false}/>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
    )
}