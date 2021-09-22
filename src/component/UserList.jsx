import React, { useEffect, useState } from 'react'
import { getUser,deleteUser } from "../service/Api";
import {addUser} from "../service/Api";
import {Link} from "react-router-dom";
import {Table,TableBody,TableRow,TableCell,TableHead,makeStyles,Button} from "@material-ui/core";

 const useStyle = makeStyles({
     table:{
         width:"90%",
         margin:'40px 0 0 50px'
     },
     head:{
         '& > *' :{
             background:"#ff7979",
             fontSize:20
         }
     },
     row:{
        '& > *':{
            fontSize:20
        }  
     }
 })
function UserList() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        allUserList();
    },[])

    const allUserList = async() =>{
        const response =  await getUser(); 
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserDetail = async(id) =>{
        await deleteUser(id);
       allUserList();

    }
    const classes = useStyle();
    return (
        <Table  className={classes.table}>
            <TableHead>
                <TableRow className={classes.head}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell></TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {
                   users.map((user)=>(
                       <TableRow className={classes.row}>
                           <TableCell>{user.id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.username}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.mobile}</TableCell>
                           <TableCell>{user.website}</TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                               <Button variant="contained" color="secondary" onClick={()=> deleteUserDetail(user.id)}>Delete</Button>
                           </TableCell>
                       </TableRow>
                   ))
                
                }
            </TableBody>
        </Table>
    )
}

export default UserList
