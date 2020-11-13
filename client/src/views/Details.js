import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import { navigate } from '@reach/router';

export default props => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => setPet(res.data))
    }, [])

    const onClick = () => {
        axios.delete("http://localhost:8000/api/pets/delete/" + props.id)
        .then(navigate("/"))
    }
    return (
        <div className="Page">
            <div className="Wrapper_2">
                <div className="Header">
                    <h1> Pet Shelter </h1> <a href="/"> Back to Home </a>
                </div>
                <div className="Header">
                    <h1> Details about: {pet.name} </h1> <button onClick={onClick}> Adopt {pet.name} </button>
                </div>
                <table className="table table-bordered table-dark table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Skill 1</th>
                        <th>Skill 2</th>
                        <th>Skill 3</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pet.type}</td>
                            <td>{pet.skill_1}</td>
                            <td>{pet.skill_2}</td>
                            <td>{pet.skill_3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
