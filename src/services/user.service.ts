import { prisma } from "src/config/client";
import getConnection from "../config/database"


const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string
) => {
    //insert into database

    const newUser = await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })
    return newUser;
}

const handleDeleteUser = async (id: string | string[]) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: +id,
        },
    })
    return deleteUser;
}

const getUserById = async (id: string | string[]) => {
    const user = prisma.user.findUnique({
        where: {
            id: +id,
        },
    })
    return user;
}


const getAllUSer = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const updateUserById = async (id: string | string[], email: string, address: string, fullName: string) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            email: email,
            address: address,
            name: fullName,
        }
    })
    return updatedUser;
}





export { handleCreateUser, getAllUSer, handleDeleteUser, getUserById, updateUserById }