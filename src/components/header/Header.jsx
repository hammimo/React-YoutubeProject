import React, { useEffect, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {IoLogoYoutube} from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';


export default function Header() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`)
    };
    useEffect(() => setText(keyword || ''), [keyword]);
    return (
        <header className='flex'>  
        <Link to='/'>
            <IoLogoYoutube />
            <h1 className='text-2xl'>Youtube</h1>
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

