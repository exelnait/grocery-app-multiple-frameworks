import React, {useCallback} from 'react';
import deleteIconSrc from '../icons/delete.svg';
import {IItem} from "../models/Item";

interface IListItemProps {
    item: IItem;
    onDelete: (id: string) => void;
}
function ListItem({item, onDelete}: IListItemProps) {
    const onClick = useCallback(() => onDelete(item.id), []);
    return (
        <div>
            <div className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100">
                <span className="text-left text-sm flex-1">{item.name}</span>
                <span onClick={onClick} className="flex items-center justify-center w-5 h-5 text-transparent ml-5">
                    <img width="10px" src={deleteIconSrc}/>
                </span>
            </div>
        </div>
    );
}
export default ListItem;