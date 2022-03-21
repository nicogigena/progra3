import React, {Component} from 'react';
import "./style.css"

class CharacterItem extends Component {
    constructor(props){
        super(props)
        this.state={
            hidden: true,
            activeDiv: false,
        }
    }

    hideToggle(event){
        event.preventDefault()
        this.state.hidden ? this.setState({hidden:false}) : this.setState({hidden:true})
    }
    activeDiv(){
        if (this.state.activeDiv) {
            this.setState({activeDiv:false})
        } else {
            this.setState({activeDiv:true})
        }
       /*this.state.active ? this.setState({activeDiv:false}) : this.setState({activeDiv:true}) */
    }

    render(){
        return(
            <div className={"character-card" + (this.state.activeDiv ? " active": "")}>
                <img src={"/images/characters/" +this.props.img} alt="hero" onDoubleClick={()=>this.activeDiv()}/>
                <h4>{this.props.name}</h4>
                <p className={this.state.hidden ? "charHidden" : "charUnhidden"}>{this.props.description}</p>
                <a onClick={(event)=>this.hideToggle(event)} href="#">{this.state.hidden ? "Ver más" : "Ver menos"}</a>
            </div>
        )
    }
}

export default CharacterItem