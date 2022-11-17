import './App.css';
import {PostList} from "./components/Post-list";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {useRef, useState} from "react";


function App() {

    const [posts, setPost] = useState([
        {id: 1, title: 'JS', body: 'Лучший язык для веб'},
        {id: 2, title: 'Python', body: 'Лучший язык для веб'},
        {id: 3, title: 'Java', body: 'Лучший язык для веб'}

    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        let idx = posts.length + 1;
        setPost([...posts, {id: idx, title, body}]);
        setTitle('');
        setBody('');
    }


    const titleInputRef = useRef();


    return (
        <div className="App">
            <form>
                <MyInput onChange={(event) => setTitle(event.target.value)} value={title}
                         placeholder={'Завголовок поста'}/>
                <MyInput onChange={(event) => setBody(event.target.value)} value={body} placeholder={'Описание поста'}/>
                <MyButton onClick={addNewPost} text='Add Post'/>

            </form>

            <PostList posts={posts} title='Список проектов'></PostList>
        </div>
    );
}

export default App;
