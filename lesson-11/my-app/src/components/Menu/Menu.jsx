import MenuItem from "./MenuItem/MenuItem";

import styles from "./Menu.module.css";

import items from "./items";

const Menu = ()=> {
    // console.log("Render Menu");

    const elements = items.map(item => <MenuItem key={item.text} {...item} />);

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default Menu;