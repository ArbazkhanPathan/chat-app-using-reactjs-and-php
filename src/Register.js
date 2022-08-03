import { useState } from "react";
import axios from "axios";
import{ useNavigate } from "react-router-dom";

const Register=()=>{
    
    let history = useNavigate();
    const [data, setData]=useState({
        username:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });

        // console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            username:data.username,
            password:data.password
        }
        console.log(sendData);
        axios.post('http://localhost:8000/src/components/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid'){
            alert('Invalid User');
        }
            else{
                history('/dashboard');
            }
        })
    }
    return(
        <div className="main-box">
            <form onSubmit={submitForm}>
    <div className="row">
        <div className="col-md 12 text-center"><h1> Register</h1></div>
        </div>
            <div className="row">  
                <div className="col-md-6"> User Name</div>
                <div className="col-md-6"> 
                    <input type="text" name="username" className="form-control" placeholder="User Name"
                    onChange={handleChange} value={data.username}
                    required/>
                </div>
            </div>
            
            
            <div className="row">  
                <div className="col-md-6"> Password</div>
                <div className="col-md-6"> 
                    <input type="password" name="password" className="form-control"placeholder="Password"
                    onChange={handleChange} value={data.password}required
                    />
                </div>
            </div> 
            <div className="row">  
                
                <div className="col-md-12 text-center"> 
                    <input type="submit" name="submit" value="Register"className="btn btn-success"/>
                </div>
            </div>  
            </form>
    </div>
    )
}

export default Register;