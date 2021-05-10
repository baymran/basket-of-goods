import React from 'react';

export default function(props){
    return(
       <div>
           <h1>POST#{props.match.params.url}</h1>
       </div>
    )
}