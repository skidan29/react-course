import {PostItem} from "./Post-item";

export const PostList = (props) => {

    const removePost = (post) => {
        props.remove(post);
    }

    if (!props.posts.length) {
        return (<h3 style={{textAlign: 'center'}}>Постов нет</h3>)
    } else {
        return (
            <div>
                <h1 style={{fontSize: '24px', textAlign: 'center'}}>{props.title}:</h1>

                {props.posts.map(post => (
                    <PostItem remove={removePost} post={post} key={post.id}></PostItem>
                ))
                }

            </div>
        );
    }
}
