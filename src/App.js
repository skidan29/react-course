
import './App.css';
import {useState} from "react";
import {PostItem} from "./components/Post-item";


function App() {


    const posts = [
        {id:1, title: 'JS', body: 'Лучший язык для веб'},
        {id:2, title: 'Python', body: 'Лучший язык для веб'},
        {id:3, title: 'Java', body: 'Лучший язык для веб'}

    ];


    return (
        <div className="App">
            <h1 style={{fontSize: '24px'}}>Список постов:</h1>
            {posts.map(post =>(<PostItem post={post} key={post.id} ></PostItem>))}

        </div>
    );
}

export default App;
