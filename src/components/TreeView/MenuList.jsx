import MenuItem from "./MenuItem";
import { MenuListStyle } from "./Styles";

export default function MenuList({ list = [] }) {
    return (
        <MenuListStyle>
            {list && list.length
                ? list.map((listItem, index) => (
                      <MenuItem key={index} item={listItem} />
                  ))
                : null}
        </MenuListStyle>
    );
}
