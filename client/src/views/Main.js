import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = props => {
    const [pets, setPets] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
    })
    return (
        <div className="Page">
            <div className="Wrapper_2">
                <div className="Header">
                    <h1> Pet Shelter </h1> <a href="/new"> add a pet to the shelter </a>
                </div>
                <div className="Header">
                    <h3> These pets are looking for a good home </h3>
                </div>
                <table className="table table-bordered table-dark table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                            pets ?
                            pets.map((pet, index) => {
                                return <tr key={index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td><a href={`/pets/${pet._id}`}>Details</a> | <a href={`/pets/${pet._id}/edit`}>Edit</a></td>
                                </tr>
                            }) : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;
