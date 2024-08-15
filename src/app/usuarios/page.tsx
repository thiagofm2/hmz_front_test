'use client'
import axios from "axios";
import LayoutDashboard from "../components/layoutDashboard";
import { useEffect, useState } from "react";
import Input from "../components/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function Usuarios() {
    const [users, setUsers] = useState([]);
    const [uniqueUser, setUniqueUser] = useState({first_name: '', last_name: '', email: '', id: 1});
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const getUsers = async(page: number, per_page: number) => {
        await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
        .then((response) => {
            setUsers(() => response.data.data);
        });
    };

    const handleEditUser = async (idUser: number) => {
        await axios.get(`https://reqres.in/api/users/${idUser}`)
        .then((response) => {
            setUniqueUser(() => response.data.data);

            setIsDialogOpen(true);
        });
    }

    const EditUser = async(idUser: number) => {
        await axios.patch(`https://reqres.in/api/users/${idUser}`, {
            email: uniqueUser.email,
            first_name: uniqueUser.first_name,
            last_name: uniqueUser.last_name
        })
        .then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        getUsers(1, 6)
    }, [])

    return(
        <>
            <LayoutDashboard>
                <div className="w-full bg-white h-full p-10" style={{overflowY: 'auto', maxHeight:'100%'}}>
                        <div className="w-full flex justify-between items-center mb-10 mt-10">
                            <h1 className="my-6"> USUÁRIOS </h1>
                        </div>
                        <div>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                <TableHead className="text-left">Foto</TableHead >
                                <TableHead className="text-left">Nome</TableHead >
                                <TableHead className="text-left">E-mail</TableHead >
                                <TableHead className="text-left">Editar</TableHead >
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    users.map((user : any) =>  {
                                        return(
                                            <TableRow 
                                            key={user.id}>
                                                <TableCell >
                                                    <img
                                                    className="avatar-image"
                                                    src={user.avatar}
                                                    />
                                                </TableCell >
                                                <TableCell >
                                                    { user.first_name + ' ' + user.last_name}
                                                </TableCell >
                                                <TableCell >
                                                    { user.email }
                                                </TableCell >
                                                <TableCell >
                                                    <button 
                                                    className="basic-button"
                                                    onClick={() => handleEditUser(user.id)}>
                                                        Editar
                                                    </button>
                                                </TableCell >
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        </div>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>

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
                                        value={uniqueUser.first_name}
                                        onChange={(e: any) => setUniqueUser({ ...uniqueUser, first_name: e.target.value })}
                                    />
                                    <Input 
                                        placeholder={'E-mail'} 
                                        idInput={'email_user'} 
                                        isPassword={false}
                                        value={uniqueUser.email}
                                        onChange={(e: any) => setUniqueUser({ ...uniqueUser, email: e.target.value })}
                                    />
                                    <Button 
                                    onClick={() => { EditUser(uniqueUser.id)}}
                                    className="basic-button">
                                        Atualizar
                                    </Button>
                                </div>
                                <div className="flex items-center w-1/2 flex-col">
                                    <Input 
                                        placeholder={'Segundo nome'} 
                                        idInput={'segundo_nome'} 
                                        isPassword={false}
                                        value={uniqueUser.last_name}
                                        onChange={(e: any) => setUniqueUser({ ...uniqueUser, last_name: e.target.value })}
                                    />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </LayoutDashboard>
        </>
    )
}