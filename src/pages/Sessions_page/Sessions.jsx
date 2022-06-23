import React from 'react';
import Header from "../Homepage/Header/Header";
import Sessions_component from '../Homepage/Sessions/Sessions';
import Comments from "../Homepage/comments/Comments"


const Sessions = () =>{
    return(
        <div>
            <Header/>
            <Sessions_component />
            <Comments />
        </div> 
    )
}

export default Sessions;
