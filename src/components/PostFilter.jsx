import React from 'react'
import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/MySelect";

export const PostFilter =({filter, setFilter}) => {

    const options = [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
    ];

    return (
        <div>

            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Поиск...'}
            ></MyInput>

            <MySelect
                value={filter.sort}
                options={options}
                onChange={e => setFilter({...filter, sort: e})}
                defaultValue={'Сортировка'}
            ></MySelect>

        </div>
    );
}
