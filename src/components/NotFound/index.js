import React from 'react';
import {Link} from "react-router";

export default function NotFound() {
    return(
        <div className={'not-found'}>
            <p>Oops, page not found!</p>
            <Link to={'/'} >To main</Link>
        </div>
    )
}