import './App.css';
import {PostList} from "./components/Post-list";
import {useState} from "react";
import {PostForm} from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Лучший язык для веб'},
        {id: 2, title: 'Python', body: 'Лучший язык для веб'},
        {id: 3, title: 'Java', body: 'Лучший язык для веб'}

    ]);

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return (
        <div className="App">
            <PostForm create={createPost}></PostForm>
            <PostList posts={posts} remove={removePost} title='Список проектов'></PostList>
        </div>
    );
}

export default App;
