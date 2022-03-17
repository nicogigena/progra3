import React from 'react';
import "./style.css"

function CharacterItem(props){
    
    return(
        <div className="character-card">
            <img src={props.img} alt="hero" />
            <h4>{props.name}</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <a href=":o">Ver más</a>
        </div>
    )
}

export default CharacterItem