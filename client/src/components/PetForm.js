import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { navigate } from '@reach/router';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");
    const [error, setError] = useState({});
    //handler when the form is submittedcopy
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/pets/new', {
            name,
            type,
            description,
            skill_1,
            skill_2,
            skill_3
        },)
            .then(res=> {
                if(res.data.error){
                    console.log(res.data.error)
                    setError(res.data.error.errors)
                }
                else{
                    console.log(res);
                    navigate('/')
                }
            })
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className="Page">
            <div className="Wrapper_2">
                <div className="Header">
                    <h1> Pet Shelter </h1> <a href="/"> Back to Home </a>
                </div>
                <div className="Header">
                    <h3>Know a pet needing a home?</h3>
                </div>
        <form onSubmit={onSubmitHandler} error = {error}>
            <p>
                <label>Name: </label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                {
                    error.name ? 
                    <span className="alert"><br/>{error.name.message}</span>
                    : ""
                }
            </p>
            <p>
                <label>Type: </label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                {
                    error.type ? 
                    <span className="alert"><br/>{error.type.message}</span>
                    : ""
                }
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                {
                    error.description ? 
                    <span className="alert"><br/>{error.description.message}</span>
                    : ""
                }
            </p>
            <h1>Skills (Optional)</h1><br/>
            <p>
                <label>Skill 1: </label><br/>
                <input type="text" onChange = {(e)=>setSkill_1(e.target.value)}/>
            </p>
            <p>
                <label>Skill 2: </label><br/>
                <input type="text" onChange = {(e)=>setSkill_2(e.target.value)}/>
            </p>
            <p>
                <label>Skill 3: </label><br/>
                <input type="text" onChange = {(e)=>setSkill_3(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
            </div>
        </div>
    )
}