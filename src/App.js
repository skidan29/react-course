import './App.css';
import {PostList} from "./components/Post-list";
import {useMemo, useState} from "react";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";


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

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;

    }, [filter.sort, posts]);

    const sortedAndFilteredPost = useMemo(() => {
        if (filter.query) {
            return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
        }
        return [...sortedPost];
    }, [filter.query, posts])

    return (
        <div className="App">

            <PostForm create={createPost}></PostForm>

            <hr style={{margin: '12px 0'}}/>

            <PostFilter filter={filter} setFilter={e => setFilter(e)}></PostFilter>

            {
                sortedAndFilteredPost.length === 0
                    ? <p>Нет добавленных постов</p>
                    : <PostList posts={sortedAndFilteredPost} remove={removePost} title='Список проектов'></PostList>
            }

        </div>
    );
}

export default App;
