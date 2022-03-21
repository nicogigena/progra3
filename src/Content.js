import React from 'react';
import ContentStat from "./components/ContentStat/ContentStat"
import LastItemDiv from "./components/LastItemDiv/LastItemDiv"
import BatteryList from "./components/BatteryList/BatteryList"
import Card from './components/CharacterItem/CharacterItem';
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
    let heroes =  [
        {
            img: 'ahsoka.jpg',
            name: 'Ashoka',
            description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
            extra: 'StarWars',
        }, 
        {
            img: 'anakin.jpg',
            name: 'Anakin',
            description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
            extra: 'StarWars',
        },
        {
            img: 'batman.jpg',
            name: 'Batman',
            description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
            extra: 'DC Comics',
        },
        {
            img: 'hulkSmall.jpg',
            name: 'Hulk',
            description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
            extra: 'Marvel',
        },
        {
            img: 'kyloRen.jpg',
            name: 'Kylo Ren',
            description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
            extra: 'StarWars',
        },       
    ];
    

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
        {heroes.map( (obj, i) => <Card name={obj.name} img={obj.img} description={obj.description} extra={obj.extra} key={obj + i} />)}
        

        </div>
    </div>
    )
}

export default Content