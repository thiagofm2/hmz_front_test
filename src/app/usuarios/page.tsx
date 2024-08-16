'use client'
import axios from "axios";
import LayoutDashboard from "../components/layoutDashboard";
import { useEffect, useState, useRef } from "react";
import UserList from "../components/userList";
import ModalUser from "../components/modalUser";
import SelectRowsTable from "../components/selectRowsTable";
import PaginationRowsTable from "../components/paginationRowsTable";


export default function Usuarios() {
    const [users, setUsers] = useState([]);
    const [uniqueUser, setUniqueUser] = useState({first_name: '', last_name: '', email: '', id: 1});
    const [rowsNumber, setRowsNumber] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const totalPages = useRef(3)

    const getUsers = async(page: number, per_page: number) => {
        await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
        .then((response) => {
            setUsers(() => response.data.data);
            totalPages.current = response.data.total_pages
        });
    };

    const handleEditUser = async (idUser: number) => {
        await axios.get(`https://reqres.in/api/users/${idUser}`)
        .then((response) => {
            setUniqueUser(() => response.data.data);

            setIsDialogOpen(true);
        });
    }
    

    const handleRowsPerPage = async(value: any) => {
        setRowsNumber(value);
        await getUsers(pageNumber, value)
    }

    const handlePageChange = async(value: any) => {
        setPageNumber(value);
        await getUsers(value, rowsNumber)
    }


    useEffect(() => {
        getUsers(pageNumber, rowsNumber)
    }, [])

    return(
        <>
            <LayoutDashboard>
                <div className="w-full bg-white h-full p-10" style={{overflowY: 'auto', maxHeight:'100%'}}>
                        <div className="w-full flex justify-between items-center mb-10 mt-10">
                            <h1 className="my-6"> USUÁRIOS </h1>
                            <div className="flex">
                                <SelectRowsTable handleRowsPerPage={handleRowsPerPage}/>
                                <PaginationRowsTable pageQuantity={totalPages.current} changePage={handlePageChange} currentPage={pageNumber}/>
                            </div>
                        </div>
                        <div>
                            <UserList userArray={users} editUserFunction={handleEditUser}/>
                            <ModalUser uniqueUser={uniqueUser} setUniqueUser={setUniqueUser} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
                        </div>
                </div>
            </LayoutDashboard>
        </>
    )
}