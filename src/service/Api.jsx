import axios from "axios";

const url = 'http://localhost:3002/users';

export const getUser = async(id) =>{
    id = id || "";
    return await axios.get(`${url}/${id}`);
}

export const addUser = async(user) =>{
    return await axios.post("http://127.0.0.1:3002/users",user);
}

export const editUser = async(id,user) =>{
    return await axios.put(`${url}/${id}`,user);

}

export const deleteUser = async(id) =>{
    return await axios.delete(`${url}/${id}`);
}