import itemCheck from '../menus/itemCheck';
import itemHome from '../menus/itemHome';
import itemManager from '../menus/itemManager';
import itemSetting from '../menus/itemSetting';
export interface typeList {
    item?: React.FC;
    menuItem?: Array<typeMenuItem>;
    link: string;
}
export interface typeMenuItem {
    name: string;
    link: string;
}
export const lists: Array<typeList> = [
    {
        item: itemHome,
        link: '/',
    },
    {
        item: itemManager,
        link: '/manager',
    },
    {
        item: itemCheck,
        link: '/check',
    },
    {
        item: itemSetting,
        link: '/setting',
        menuItem: [
            {
                name: 'Gói dịch vụ',
                link: '/setting/service',
            },
        ],
    },
];
