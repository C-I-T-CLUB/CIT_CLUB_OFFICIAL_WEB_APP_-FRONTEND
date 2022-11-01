import SidebarItem from "./SidebarItem"
import { useState } from "react";
import items from "../data/sidebar.json"
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';



export default function Sidebar(){
    const [active, setActive] = useState(0);
    return (
        <div className={!active?"sidebar ":"sidenar"}>
          <div>
            <h3 className="faculty">FACULTY</h3>
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
          </div>
          <div className={!active?"toggle":"toggle-r"}>
            <button className="btn" onClick={()=>setActive(!active)}><img src={arrowDown} alt="-->" /></button>
          </div>
        </div>
    )
}