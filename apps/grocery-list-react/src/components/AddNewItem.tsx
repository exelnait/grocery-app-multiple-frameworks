import React, {useCallback} from 'react';
import addIconSrc from '../icons/add.svg';

interface IAddNewsItemProps {
    onAdd: (name: string) => void;
}
const AddNewItem = ({onAdd}: IAddNewsItemProps) => {
    const [value, setValue] = React.useState<string>('');
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, [value]);
    const onClick = useCallback(() => {
        onAdd(value);
        setValue('');
    }, [value]);
    const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAdd(value);
            setValue('');
        }
    }, [value, onAdd]);
    return (
        <div className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <img onClick={onClick} width="20px" src={addIconSrc}/>
            <input onKeyDown={onKeyDown} value={value} onChange={onChange}
                   className="flex-grow h-8 ml-4 bg-transparent border-0 focus:outline-none font-medium"
                   type="text" placeholder="add a new item"/>
        </div>
    )
}
export default AddNewItem;