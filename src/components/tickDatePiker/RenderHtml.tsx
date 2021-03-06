//==========================================================

import { TypeRenderColumnTable, TypeRenderRowTable } from './type';

//==========================================================
export const renderTitleTable = (tableTitle: Array<string>) => {
    let xhtml;

    if (tableTitle.length > 0) {
        xhtml = tableTitle.map((title) => (
            <th key={title}>
                {' '}
                <span> {title} </span>{' '}
            </th>
        ));
    }
    return xhtml;
};
//==========================================================
//==========================render column table================================
//==========================================================
export const renderColumnTable: TypeRenderColumnTable = (
    week,
    handleClick
) => {
    let xhtml;
    if (week.length === 7) {
        xhtml = week.map((day: any, i: number) => {
            const { monthSate, number, active } = day;
            let disable = monthSate === 0 ? '' : 'disable';
            let act = active === 1 ? 'active' : '';
            return (
                <td key={number}>
                    <span
                        className={` ${disable}  ${act}`}
                        onClick={() => handleClick(day)}
                    >
                        {number}
                    </span>
                </td>
            );
        });
    }
    return xhtml;
};
//==========================================================
//==========================render row table================================
//==========================================================
export const renderRowTable: TypeRenderRowTable = (
    weeks,
    handleClick,
    valueRadio
) => {
    let xhtml;
    if (weeks) {
        xhtml = weeks.map((week: any, j: number) => {
            let trActive = week.find((item: any) => item.active === 1);
            return (
                <tr
                    key={j}
                    className={valueRadio === 2 && trActive ? 'tr-active' : ''}
                >
                    {renderColumnTable(week, handleClick)}
                </tr>
            );
        });
    }

    return xhtml;
};
