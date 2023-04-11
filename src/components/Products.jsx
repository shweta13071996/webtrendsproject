import React from 'react';
import Productbox from './Productbox';
import burger1 from '../images/burger1.png'; // https://stock.adobe.com/ca/search?k=burger&asset_id=214836687
import burger2 from '../images/burger2.png'; // link https://stock.adobe.com/ca/search?k=burger&asset_id=109252282
import burger3 from '../images/burger3.png'; // https://stock.adobe.com/ca/search?k=burger&asset_id=46374880
import burger4 from '../images/burger4.png'; //link https://stock.adobe.com/ca/search?k=burger&asset_id=284573041

function Products(){
    return(
        <div id = "products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Enjoy your favourite menu items has never been more convenient and satisfy your carvings</p>
                <div className='a-container'>
                    <Productbox image = {burger1} title = "Chicken Bacon Burger" />
                    <Productbox image = {burger2} title = "Cheesy Beef Burger" />
                    <Productbox image = {burger3} title = "Chicken Burger" />
                    <Productbox image = {burger4} title = "Chicken Crispy Burger" />

                </div>
        </div>
    )
};
export default Products;