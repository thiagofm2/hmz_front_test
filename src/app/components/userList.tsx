import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

  interface Props {
    userArray: never[],
    editUserFunction: Function,
  }

  export default function UserList(props : Props){
    return(
        <>
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
                        props.userArray.map((user : any) =>  {
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
                                        <Button 
                                        className="basic-button"
                                        onClick={() => props.editUserFunction(user.id)}>
                                            Editar
                                        </Button>
                                    </TableCell >
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </>
    )
  }