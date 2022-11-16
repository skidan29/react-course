import './App.css';
import {PostList} from "./components/Post-list";
import {MyButton} from "./components/UI/button/MyButton";


function App() {


    const posts = [
        {id: 1, title: 'JS', body: 'Лучший язык для веб'},
        {id: 2, title: 'Python', body: 'Лучший язык для веб'},
        {id: 3, title: 'Java', body: 'Лучший язык для веб'}

    ];


    return (
        <div className="App">
            <form>
                Заголовок поста: <input type="text"/>
                Описание поста: <input type="text"/>
                <MyButton text='Add Post'/>

            </form>

            <PostList posts={posts} title='Список проектов!!!'></PostList>
        </div>
    );
}

export default App;
