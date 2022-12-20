import React from 'react';
import { useParams } from 'react-router-dom';

export default function PlayList() {
    const {keyword} = useParams();
    return (
        <div>
            videos {keyword ? `${keyword}` : '💥'}
        </div>
    );
}

