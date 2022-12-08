import './App.css';
import {PostList} from "./components/Post-list";
import {useMemo, useState} from "react";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./components/MyModal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Лучший язык для веб'},
        {id: 2, title: 'Python', body: 'Лучший язык для веб'},
        {id: 3, title: 'Java', body: 'Лучший язык для веб'}

    ]);
    let [visibleModal, setVisibleModal] = useState(false);
    const createPost = (post) => {
        setPosts([...posts, post]);
        setVisibleModal(false);
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

    const closeModal = (value) => {
        setVisibleModal(value)
    }

    const sortedAndFilteredPost = useMemo(() => {
        if (filter.query) {
            return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
        }
        return [...sortedPost];
    }, [filter.query, posts])

    return (
        <div className="App">

            <MyButton onClick={() => setVisibleModal(true)}>Добавить пост</MyButton>

            <MyModal visible={visibleModal} setVisible = {setVisibleModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '12px 0'}}/>

            <PostFilter filter={filter} setFilter={e => setFilter(e)}/>


            <PostList posts={sortedAndFilteredPost} remove={removePost} title='Список проектов'/>

        </div>
    );
}

export default App;
