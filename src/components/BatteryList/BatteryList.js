import React from 'react';
import BatteryListItem from '../BatteryListItem/BatteryListItem'

function BatteryList(props){
    return(
    <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {props.list.map((listItem,i) => <BatteryListItem name={listItem} key={listItem + i}/>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default BatteryList