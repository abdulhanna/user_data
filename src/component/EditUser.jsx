import { FormGroup,FormControl, InputLabel,Input,makeStyles ,Button} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { addUser, getUser,editUser } from '../service/Api';
import {useHistory,useParams} from "react-router-dom";


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
    
function EditUser() {
    const [user,setuser] = useState(initialValue);
    const {name,username,email,mobile,website} = user;

    const classes = useStyle();
    const history = useHistory();
    const {id} = useParams();

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setuser({...user,[name]:value});
        // console.log(user);
    }

    const editUserDatail = async() =>{
        await editUser(id,user);
        history.push("/list");

    }

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async() =>{
       const response = await getUser(id);
       setuser(response.data);
    }

   
    
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
               <Button variant="contained" onClick={ editUserDatail} color="primary">Edit User</Button>
           </FormControl>
       </FormGroup>
    )
}

export default EditUser
