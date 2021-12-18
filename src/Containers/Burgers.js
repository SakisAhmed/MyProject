import React from 'react'
import { useSelector } from "react-redux";
import EatCard from '../components/EatCard';
function Burgers() {
    const data = useSelector((state) => state.menuReducers.menuList);
    let list = data.filter(el=> el.cathegorie === "Burger");
    return (
        <div  className="tab-pane">
            <div  className="row">
            {
                list.map(el=>(
                    <EatCard id= {el.id} title={el.title} description={el.description} imageURL={el.imageURL} price={el.price}></EatCard>      
                 ))
            }
        </div></div>
    )
}

export default Burgers
