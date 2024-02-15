import { useState } from "react";
import MenuList from "./MenuList";
import { TreeViewStyle } from "./Styles";
import { Sidebar } from "./Styles";
export default function TreeView({ menu = [] }) {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setToggleSidebar((prev) => !prev);
    };
    return (
        <Sidebar>
            <div
                className={`sidebar-icon ${toggleSidebar ? "s-active" : ""}`}
                onClick={handleToggleSidebar}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <TreeViewStyle className={`${toggleSidebar ? "show" : ""}`}>
                <div className="container">
                    <MenuList list={menu} />
                </div>
            </TreeViewStyle>
        </Sidebar>
    );
}
