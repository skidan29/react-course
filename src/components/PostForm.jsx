import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import {useState} from "react";

export const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        let idx = Date.now();
        const newPosts = {id: idx, ...post};
        create(newPosts);
        setPost({
            title: '',
            body: '',
        })
    }

    return (
        <form>
            <MyInput onChange={(event) => setPost({...post, title: event.target.value})} value={post.title}
                     placeholder={'Завголовок поста'}/>
            <MyInput onChange={(event) => setPost({...post, body: event.target.value})} value={post.body}
                     placeholder={'Описание поста'}/>
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>

        </form>
    );
}


