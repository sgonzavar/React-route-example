import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUser] = useState([])

    const getUsers = async () => {
        const replay = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = await replay.data;
        setUser(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Fragment>
            <div className="container">
                <h1>Listado <span class="badge bg-primary">React</span></h1>
                {
                    users.map((item) => (
                        <div key={item.id}>
                            <div class="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quaerat voluptates tempore numquam praesentium maxime ad ullam, dolores reprehenderit laborum iusto consequuntur sequi, obcaecati nulla ut vel illo nisi minus.</p>
                                        <Link className="btn btn-primary text-capitalize" to={`/usuario/${item.id}`}>go somewhere</Link>
                                    </div>
                                </div>
                                
                            </div>
                            ))
                }
                        </div>
        </Fragment>
            )
}

export default Users
