import { useState } from "react";
import MenuList from "./MenuList";
import { MenuItemStyle } from "./Styles";

export default function MenuItem({ item = [] }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (label) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label],
        });
    };
    console.log(displayCurrentChildren);

    //     <span onClick={() => handleToggleChildren(item.label)}>
    //     {displayCurrentChildren[item.label] ? "-" : "+"}
    // </span>
    return (
        <MenuItemStyle>
            <div
                className={`menu-item-container ${
                    displayCurrentChildren[item.label] ? "active" : ""
                }`}
                onClick={() => handleToggleChildren(item.label)}
            >
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                    </div>
                ) : null}
            </div>

            {item &&
            item.children &&
            item.children.length > 0 &&
            displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
        </MenuItemStyle>
    );
}
