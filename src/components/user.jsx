import React, { Fragment, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const { id } = useParams();
     
    const [user, setUser] = useState([]);

    const getUser = async () => {
        const replay = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const answer = await replay.data;
        setUser(answer);
    }

    useEffect(() => {
        getUser();
    }, []);



    return ( 
        <Fragment>
            <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{user.name}</h3>
                        <p className="card-text"> username :  {user.username}</p>
                        <p className="card-text"> email : {user.email}</p>
                        <p className="card-text"> phone : {user.phone}</p>
                    </div>
            </div>
        </Fragment> 
    )
};

export default User;
