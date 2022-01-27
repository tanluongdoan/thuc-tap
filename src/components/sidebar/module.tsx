import { NavLink } from 'react-router-dom';
import { lists, typeList, typeMenuItem } from './Sidebar.types';

//===================================================
//==========================render menu item=========================
//===================================================
const renderMenuItem = (menuItems: Array<typeMenuItem>) => {
    let xhtml = null;
    if (menuItems) {
        xhtml = menuItems.map((item: typeMenuItem) => (
            <li key={item.name}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? 'item-active' : ' '
                    }
                    to={item.link}
                >
                    {item.name}
                </NavLink>
            </li>
        ));
    }
    return xhtml;
};
//===========================================================
//==========================render list-item có menu con=================================
//===========================================================
const renderListsItemMenuItem = (
    list: typeList,
    menuItem: Array<typeMenuItem>
) => {
    return (
        <li key={list.link}>
            <NavLink
                className={(navData) =>
                    navData.isActive ? 'active disable ' : 'disable'
                }
                onClick={(e) => e.preventDefault()}
                to={list.link}
            >
                {list.item}
            </NavLink>
            <ul className="menu-item">{renderMenuItem(menuItem)}</ul>
        </li>
    );
};

//===========================================================
//==========================render list-item không có menu con=================================
//===========================================================
const renderListsItemNoMenuItem = (list: typeList) => {
    return (
        <li key={list.link}>
            <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to={list.link}
            >
                {list.item}
            </NavLink>
        </li>
    );
};
//========================================================
//================================================
export const renderLists = (lits: Array<typeList>) => {
    let xhtml = null;
    if (lits && lists.length > 0) {
        xhtml = lists.map((list) => {
            const { menuItem } = list;
            if (menuItem) {
                return renderListsItemMenuItem(list, menuItem);
            } else {
                return renderListsItemNoMenuItem(list);
            }
        });
    }
    return xhtml;
};
