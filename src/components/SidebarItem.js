import { useState } from "react"
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';
import Laptop from '../assets/cit club design/icon/iconmonstr-laptop-4 4.svg'
import Fameco from '../assets/cit club design/icon/fameco.svg'
import Social from '../assets/cit club design/icon/head-svgrepo-com 2.svg'
import Fobe from '../assets/cit club design/icon/iconmonstr-coin-10 2.svg'
import Fosat from '../assets/cit club design/icon/iconmonstr-flask-7 2.svg'
import Engeneering from '../assets/cit club design/icon/engineering-svgrepo-com 2.svg'


export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.icon === "Laptop" ? <img src={Laptop} alt=""/> : null }
                        { item.icon === "Fameco" ? <img src={Fameco} alt=""/> : null }
                        { item.icon === "Engeneering" ? <img src={Engeneering} alt=""/> : null }
                        { item.icon === "Fosat" ? <img src={Fosat} alt=""/> : null }
                        { item.icon === "Fobe" ? <img src={Fobe} alt=""/> : null }
                        { item.icon === "Social" ? <img src={Social} alt=""/> : null }
                        {item.title}    
                    </span> 
                    <img src={arrowDown} onClick={() => setOpen(!open)} alt="" className="toggle-btn" />
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}