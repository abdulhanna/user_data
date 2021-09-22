import { FormGroup,FormControl, InputLabel,Input,makeStyles ,Button} from '@material-ui/core'
import React, { useState } from 'react'
import { addUser } from '../service/Api';
import axios from "axios";
import {useHistory} from "react-router-dom";


const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        '& > *':{
            marginTop:20
        }
    }
})

 const initialValue = {
     name:"",
     username:"",
     email:"",
     mobile:"",
     website:""
 }
    
function AddUser() {
    const [user,setuser] = useState(initialValue);
    const {name,username,email,mobile,website} = user;

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setuser({...user,[name]:value});
        // console.log(user);
    }

    const addUserDatail = async() =>{
        await addUser(user);
        history.push("/list");

    }

    const classes = useStyle();
    const history = useHistory();
    return (
       <FormGroup className={ classes.container}>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>handleInput(e)} name="name" value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>UserName</InputLabel>
               <Input onChange={(e)=>handleInput(e)} name="username"
                   value={username}
               />
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>handleInput(e)} name="email" value={email}/>
           </FormControl>
           <FormControl>
               <InputLabel>Mobile</InputLabel>
               <Input onChange={(e)=>handleInput(e)} name="mobile" value={mobile}/>
           </FormControl>
           <FormControl>
               <InputLabel>Website</InputLabel>
               <Input onChange={(e)=>handleInput(e)} name="website" value={website}/>
           </FormControl>
           <FormControl>
               <Button variant="contained" onClick={ addUserDatail} color="primary">Add User</Button>
           </FormControl>
       </FormGroup>
    )
}

export default AddUser
