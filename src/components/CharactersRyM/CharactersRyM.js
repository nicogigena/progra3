import React, {Component} from "react";
import Card from "../Card/Card";
import './style.css'

class CharactersRyM extends Component{
    constructor(props){
        super(props);
        this.state={
            characters: [],
            charactersBkp: [],
            nextPage:'', 
            formText:''
        }
    }

    //Pedir datos a la API y guardarlos en el estado
    componentDidMount(){
        let url ='https://rickandmortyapi.com/api/character';
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    characters:data.results,
                    charactersBkp:data.results,
                    nextPage:data.info.next,
                }
                
            ))
            .catch( error => console.log(error))
    }

    cargarMas(){
        let url = this.state.nextPage;
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    characters:this.state.characters.concat(data.results),
                    nextPage:data.info.next,
                }
            ))
            .catch( error => console.log(error))
    }

    borrarTarjeta(id){
        //Filtrar una y dejar las demás tarjetas
        let personajesFiltrados = this.state.characters.filter( oneCharacter => oneCharacter.id !== id )

        //Cambiar el estado
        this.setState({
            characters: personajesFiltrados
        })
    }
    
    pDef(event){
        event.preventDefault();
        console.log(this.state.formText.toUpperCase());
        this.setState({
            characters: this.state.characters.filter(word => word.name.toUpperCase().indexOf(this.state.formText.toUpperCase())!==-1)
        })
    }
    fChange(event){
        
        this.setState({
            formText: event.target.value,
        })
        console.log(this.state.formText);
    }

    resetChar(event){
        this.setState({
            characters: this.state.charactersBkp
        })
    }

    // Renderizar condicional "cargando..." o las tarjetas.
    // Las tarjeatas se van a renderizar usando .map            
    render(){
        // console.log(this.state.characters);
        return(
            <React.Fragment>
            <form onSubmit={(event)=>this.pDef(event)} className="mb-4">
                <input onChange={(event)=>this.fChange(event)} value={this.props.formText} />
                <button type="submit">Enviar</button>
            </form>
            <button className="mb-4" type="button" onClick={ ()=>this.cargarMas()}>Cargar más</button>
            <button className="mb-4" type="button" onClick={ ()=>this.resetChar()}>Reiniciar</button>
            <section>


                { 
                    this.state.characters.length === 0 ?
                    <p>Cargando...</p> :
                    this.state.characters.map( (oneCharacter, idx) => <Card key={oneCharacter.name + idx} characterInfo={oneCharacter} borrar={(pepe)=>this.borrarTarjeta(pepe)
                    }/>)

                    
                }
            </section>
            </React.Fragment>

        )
    }

}

export default CharactersRyM
