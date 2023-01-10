import './App.css';
import {PostList} from "./components/Post-list";
import React, {useEffect, useState} from "react";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./components/MyModal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import {Loader} from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageArray, getPageCount} from "./utils/page";


function App() {

    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [visibleModal, setVisibleModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndFilteredPost = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPageArray(totalPages);


    const [fetchPost, isPostLoading, postError] = useFetching(async (limit, page) => {
        const posts = await PostService.getAll(limit, page);
        setPosts(posts.data);
        const totalCount = posts.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });


    useEffect(() => {
        fetchPost(limit, page);
    }, [])

    const changePage = (numberPage) => {
        setPage(numberPage);
        fetchPost(limit, numberPage);
    }

    const createPost = (post) => {
        setPosts([...posts, post]);
        setVisibleModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">

            <MyButton onClick={() => setVisibleModal(true)}>Добавить пост</MyButton>

            <MyModal visible={visibleModal} setVisible={setVisibleModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '12px 0'}}/>

            <PostFilter filter={filter} setFilter={e => setFilter(e)}/>

            {postError && <h1>
                Произошла ошибка
            </h1>}

            {isPostLoading ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div> :
                <PostList posts={sortedAndFilteredPost} remove={removePost} title='Список проектов'/>}
            <div className='page__wrapper'>
                {pagesArray.map((numberPage) =>
                    <span key={numberPage} onClick={()=>changePage(numberPage)} className={numberPage === page ? 'page__btn page_active' : 'page__btn'}>{numberPage}</span>)
                }
            </div>

        </div>
    );
}

export default App;
