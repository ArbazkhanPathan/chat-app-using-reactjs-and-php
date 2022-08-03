import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

const Dashboard=()=>{
    const [auth,setAuth]=useState('');
    const [user,setUser]=useState('');
    let navigate =  useNavigate();
    useEffect(()=>{
        var auth = localStorage.getItem('username');
        // var user = localStorage.getItem('userName');
        
        setAuth(auth);
        setUser(user);
      },
      [])
    if(auth===null){
        navigate(`/login`)
      }



    const[student, setStudent] =useState([]);

    useEffect(() =>{
        loadUsers();
    },
    []
    )

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:8000/src/components/view.php")
        // console.log(result);
        setStudent(result.data.records);
    }

    const deleteUser=(email)=>{
        
        axios.delete("http://localhost:8000/src/components/delete.php",{ data: { email: email } })
        .then((result)=>{
            loadUsers();
        }).catch(()=>{
            alert('An Error occoured in Deleting')
        })   
    }
    // const chatUser=(id)=>{
    //     axios.post("http://localhost/internship-trail/internship-task/src/components/chat.php",{ data: { id: id } })
    //     .then((result)=>{
    //         console.log("id is :-",id)
    //         window.localStorage.setItem('id', id);
    //     }).catch(()=>{
    //         alert('An Error occoured in getting id')
    //     })
    // }
    

    
    // const chatUser=(e,id)=>{
    //     e.preventDefault();

    //     const sendId = {
    //         id:data.id
    //     }
    //     axios.post("http://localhost/internship-trail/internship-task/src/components/chat.php",{ data: { id: id } })
    //     .then((result)=>{
    //         console.log("id is :-",id)
    //         if (result.data.Status == 'Invalid'){
    //             alert('Invalid User');
    //         }
    //             else{
    //                 console.log("chat happy with",id)
    //             }
    //         })



    
    return(
        <div>
            Welcome {auth} to your Admin page

            <div>
    <div className="row">
        <div className="col-md-12 text-center">
            <h1>Users List</h1>
        </div>
        </div>
        <div className="row">
            <div className="col-md-2">Sr. No.</div>
            <div className="col-md-2">First Name</div>
            <div className="col-md-2">Last Name</div>
            <div className="col-md-2">Email</div>
            <div className="col-md-2"></div>
            <div className="col-md-2">Delete</div>
        </div>
        {student.map((student, index) =>(
        <div className="row">
            <div className="col-md-2">{index+1}</div>
            <div className="col-md-2">{student.fname}</div>
            <div className="col-md-2">{student.lname}</div>
            <div className="col-md-2">{student.email}</div>
            
            <div className="col-md-2"></div>
            
            <div className="col-md-2">
            <Link className="btn btn-danger"
            to="" onClick={() => deleteUser(student.email)}>   
             &nbsp; DELETE 
             </Link>
            </div>
        </div>
        ))}
</div>
        </div>
        
    )
}

export default Dashboard;

