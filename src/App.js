import './App.css';
import {PostList} from "./components/Post-list";
import {useState} from "react";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/MySelect";
import {getValue} from "@testing-library/user-event/dist/utils";


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

    const options = [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
    ];

    const [selectedStore, setSelectedStore] = useState('');


    const sortPost = (sort) => {
        setSelectedStore(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
        console.log(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}></PostForm>
            <hr style={{margin: '12px 0'}}/>
            <div>
                <MySelect value={selectedStore} options={options} onChange={sortPost}
                          defaultValue={'Сортировка'}></MySelect>
            </div>
            <PostList posts={posts} remove={removePost} title='Список проектов'></PostList>
        </div>
    );
}

export default App;
