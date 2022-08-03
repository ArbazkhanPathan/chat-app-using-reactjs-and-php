import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from 'react-router-dom';
const Chat=()=>{
    // let navigate =  useNavigate();
    // navigate(`http://localhost:8000/src/asd.php`)
    window.location.href = 'http://localhost:8000/src/components/php-chat/index.php';
    return(
    <div>
        
    </div>        
    )
}

export default Chat;