import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import '../App.css';
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill_1, setSkill_1] = useState('');
    const [skill_2, setSkill_2] = useState('');
    const [skill_3, setSkill_3] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill_1(res.data.skill_1);
                setSkill_2(res.data.skill_2);
                setSkill_3(res.data.skill_3);
            })
    }, [])
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/update/' + id, {
            name,
            type,
            description,
            skill_1,
            skill_2,
            skill_3
        })
            .then(res => {
                console.log(res)
                navigate('/')});
    }
    return (
        <div className="Page">
            <div className="Wrapper_2">
                <div className="Header">
                    <h1> Pet Shelter </h1> <a href="/"> Back to Home </a>
                </div>
                <div className="Header">
                    <h3>Edit {name}</h3>
                </div>
                <form onSubmit={updatePet}>
                <p>
                    <label>Name: </label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Type: </label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description: </label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 1: </label><br />
                    <input type="text" 
                    name="skill 1"
                    value={skill_1} 
                    onChange={(e) => { setSkill_1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2: </label><br />
                    <input type="text" 
                    name="skill 2"
                    value={skill_2} 
                    onChange={(e) => { setSkill_2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 1: </label><br />
                    <input type="text" 
                    name="skill 3"
                    value={skill_3} 
                    onChange={(e) => { setSkill_3(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            </div>
        </div>
    )
}
