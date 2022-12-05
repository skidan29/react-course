import './App.css';
import {PostList} from "./components/Post-list";
import {useMemo, useState} from "react";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/MySelect";
import {MyInput} from "./components/UI/input/MyInput";


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

    const [searchStore, setSearchStore] = useState('');

    const sortedPost = useMemo(() => {
        if (selectedStore) {
            return [...posts].sort((a, b) => a[selectedStore].localeCompare(b[selectedStore]));
        }
        return posts;

    }, [selectedStore, posts]);

    const sortPost = (sort) => {
        setSelectedStore(sort);
    }

    const sortedAndFilteredPost = useMemo(() => {
        if (searchStore) {
            return sortedPost.filter(post => post.title.toLowerCase().includes(searchStore.toLowerCase()));
        }
        return [...sortedPost];
    }, [searchStore, posts])

    return (
        <div className="App">

            <PostForm create={createPost}></PostForm>

            <hr style={{margin: '12px 0'}}/>

            <div>

                <MyInput value={searchStore} onChange={e => setSearchStore(e.target.value)}></MyInput>

                <MySelect value={selectedStore} options={options} onChange={sortPost}
                          defaultValue={'Сортировка'}></MySelect>

            </div>

            {
                sortedAndFilteredPost.length === 0
                    ? <p>Нет добавленных постов</p>
                    : <PostList posts={sortedAndFilteredPost} remove={removePost} title='Список проектов'></PostList>
            }

        </div>
    );
}

export default App;
