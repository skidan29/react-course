import './App.css';
import {PostList} from "./components/Post-list";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {useState} from "react";
import {PostForm} from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Лучший язык для веб'},
        {id: 2, title: 'Python', body: 'Лучший язык для веб'},
        {id: 3, title: 'Java', body: 'Лучший язык для веб'}

    ]);

    const createPost = (post) =>{
        setPosts([...posts, post]);
    }


    return (
        <div className="App">
            <PostForm create={createPost}></PostForm>
            <PostList posts={posts} title='Список проектов'></PostList>
        </div>
    );
}

export default App;
