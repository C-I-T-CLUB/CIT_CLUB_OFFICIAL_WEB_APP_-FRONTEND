import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
          <h3 className="faculty">FACULTY</h3>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}