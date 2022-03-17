import React from 'react';
import ContentStat from "../ContentStat/ContentStat"
import LastItemDiv from "../LastItemDiv/LastItemDiv"
import BatteryList from "../BatteryList/BatteryList"


function Content(){
    let list = ["Category 01", "Category 02", "Category 03", "Category 04", "Category 05", "Category 06"]
    return(
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">

            <ContentStat name="Products in DataBase" border="primary" value="135" icon="clipboard-list" />
            <ContentStat name="Amount in products" border="success" value="$546.456" icon="dollar-sign" />
            <ContentStat name="Users quantity" border="warning" value="38" icon="user-check" />
                        
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
            {/* <!-- Last Product in DB --> */}
            <LastItemDiv img="images/product_dummy.svg" />

            {/* <!-- Categories in DB --> */}
            <BatteryList list={list}/>
        </div>
    </div>
    )
}

export default Content