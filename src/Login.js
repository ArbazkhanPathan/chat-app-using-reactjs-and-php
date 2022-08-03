import{ useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({username:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            username:user.username,
            password:user.password
        }
        // console.log(sendData);

        axios.post('http://localhost:8000/src/components/login.php',sendData)
        .then((result)=>{
            if (result.data.Status === '200'){
                window.localStorage.setItem('username', result.data.username);
                // window.localStorage.setItem('userName', (result.data.username+ ' '  +result.data.lname))
                // alert("login successfully")
                navigate('/dashboard');
        }
            else{
                alert('Invalid User');
            }
        })
    }
    return(
        <form onSubmit={submitForm}>
    <div className="main-box">
        <div className="row">
            <div className="col-md-12 text-center"><h1>Login page</h1></div>
        </div> 
        <div className="row">
            <div className="col-md-6">User Name: </div>
            <div className="col-md-6"><input type="text" name="username" onChange={handleChange} value={user.username} required/></div>
            
        </div>   
        <div className="row">
            <div className="col-md-6">Password: </div>
            <div className="col-md-6"><input type="password" name="password" onChange={handleChange} value={user.password} required/></div>
            
        </div>   

        <div className="row">
            <div className="col-md-12">
            <input type="submit" className="btn btn-success"value="Plese Login"/>
            </div>
        </div> 
    </div>    
    </form>
    )
}

export default Login;