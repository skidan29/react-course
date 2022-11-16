import {PostItem} from "./Post-item";

export const PostList = (props) => {

    return (
        <div>
            <h1 style={{fontSize: '24px', textAlign: 'center'}}>{props.title}:</h1>
            {props.posts.map(post =>(<PostItem post={post} key={post.id} ></PostItem>))}

        </div>
    );
}
