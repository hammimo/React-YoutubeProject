import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {IoLogoYoutube} from 'react-icons/io';

export default function Header() {
    return (
        <>  
            <button><IoLogoYoutube/>Youtube</button>
            <input type='text' placeholder='Search...'/>
            <button><BiSearchAlt/></button>
        </>
    );
}

