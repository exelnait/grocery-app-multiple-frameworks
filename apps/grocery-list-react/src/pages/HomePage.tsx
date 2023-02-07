import React, {useCallback, useState} from 'react';
import ListItem from "../components/ListItem";
import {IItem} from "../models/Item";
import AddNewItem from "../components/AddNewItem";

function HomePage() {
    const [items, setItems] = useState<IItem[]>([]);
    const onDelete = useCallback((id: string) => {
        setItems(items.filter(i => i.id !== id));
    }, [items]);
    const onAdd = useCallback((name: string) => {
        setItems([...items, { id: Date.now().toString(), name }]);
    }, [items]);
    return (
        <div className="flex items-center justify-center w-screen h-screen font-medium">
            <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
                <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
                    { items.map(item => <ListItem key={item.id} item={item}
                                                  onDelete={onDelete} />) }
                    <AddNewItem onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}
export default HomePage;