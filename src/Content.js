import React from 'react';
import ContentStat from "./components/ContentStat/ContentStat"
import LastItemDiv from "./components/LastItemDiv/LastItemDiv"
import BatteryList from "./components/BatteryList/BatteryList"
import CharacterItem from './components/CharacterItem/CharacterItem';
import "./ContentStyle.css"


function Content(){

    //Gráficos requeridos
    let contentStats = [
        {
            name: "Products in DataBase",
            border: "primary",
            value: "135",
            icon: "clipboard-list"
        },        {
            name: "Amount in products",
            border: "success",
            value: "$546.456",
            icon: "dollar-sign"
        },        {
            name: "Users quantity",
            border: "warning",
            value: "38",
            icon: "user-check"
        }
    ]

    // Heroes
    let characterName = ["ahsoka", "anakin", "batman", "capAmerica", "cell", "hulkSmall", "kyloRen", "luke", "obiWan", "strange", "superman", "vegetta", "yoda"]
    let characters = []
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    for (let i = 0; i < characterName.length; i++) {
        let characterImage = "images/characters/" + characterName[i] + ".jpg"
        characters.push({})
        characters[i].image=characterImage
        characters[i].name=capitalizeFirstLetter(characterName[i])
    }
    //console.log(characters);

    return(
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
            {contentStats.map((item,i) => <ContentStat name={item.name} border={item.border} value={item.value} icon={item.icon} key={item + i}/>)}
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
            {/* <!-- Last Product in DB --> */}
            <LastItemDiv img="images/product_dummy.svg" />

            {/* <!-- Categories in DB --> */}
            <BatteryList />
        </div>
            <h3 className="b s">Personajes de Peliculas</h3>
        <div className="d-flex characters">
            {characters.map((item, i) => <CharacterItem name={item.name} img={item.image} key={item + i}/>)}

        </div>
    </div>
    )
}

export default Content