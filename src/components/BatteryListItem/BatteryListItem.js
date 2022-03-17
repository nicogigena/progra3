import React from 'react';

function BatteryItem(props){
    
    return(
    <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {props.name}
            </div>
        </div>
    </div>
    )
}

export default BatteryItem