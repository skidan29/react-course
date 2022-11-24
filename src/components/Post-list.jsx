import {PostItem} from "./Post-item";

export const PostList = (props) => {

    const removePost = (post) => {
        props.remove(post);
    }


    return (
        <div>
            <h1 style={{fontSize: '24px', textAlign: 'center'}}>{props.title}:</h1>
            {props.posts.length === 0 ? <p>Нет добавленных постов</p> :
                props.posts.map(post => (
                    <PostItem remove={removePost} post={post} key={post.id}></PostItem>
                ))
            }

        </div>
    );
}
