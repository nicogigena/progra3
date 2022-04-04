import React, {Component} from 'react';
import ContentStat from "./components/ContentStat/ContentStat"
import LastItemDiv from "./components/LastItemDiv/LastItemDiv"
import BatteryList from "./components/BatteryList/BatteryList"
import CharactersRyM from './components/CharactersRyM/CharactersRyM';
import "./ContentStyle.css"


class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            contentStats : [
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
        }
    }

    render(){
        return(
            <div className="container-fluid">
    
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
    
            {/* <!-- Content Row --> */}
            <div className="row">
                {this.state.contentStats.map((item,i) => <ContentStat data={item} key={item + i}/>)}
            </div>
    
            {/* <!-- Content Row --> */}
            <div className="row">            
                <LastItemDiv img="images/product_dummy.svg" />
                <BatteryList />
            </div>    
            <h3 className="h3"> Rick and Morty</h3>
            <CharactersRyM />
        </div>
        )
    }
}


export default Content