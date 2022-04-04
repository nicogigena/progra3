import React, {Component} from "react";
import './style.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <article>
                <img src={this.props.characterInfo.image} alt={this.props.characterInfo.name} />
                <h3>{this.props.characterInfo.name}</h3>
                <p>Status: {this.props.characterInfo.status}</p>
                <button onClick={()=>this.props.borrar(this.props.characterInfo.id)}>Borrar</button>
            </article>
        ) 
    }
}

export default Card;