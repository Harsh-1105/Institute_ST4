import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json())
        .then(data =>setUsers(data))
    },[])
    return (
        <div className="container">
            <h1 className="header text-center">HKS <span>INSTITUTE</span></h1>

            <p className="paragraph text-center">A Goal Without a plan is just a Wish.</p>

            <h1 className="text-center">Fresh Courses</h1>
            <h4 className="text-center">Learn new skills, pursue your interests or advance your career with our short online courses.</h4>
            <div className="row">
            
            </div>
        </div>
    );
};

export default Home;