import React, { useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {IoLogoYoutube} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';



export default function Header() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`)
    }
    return (
        <header>  
        <Link to='/'>
            <IoLogoYoutube/>
            <h1>Youtube</h1>
        </Link>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Search...' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
            <button type='submit'><BiSearchAlt/></button>
        </form>
        </header>
    );
}

