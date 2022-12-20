import {PostItem} from "./Post-item";
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
                <TransitionGroup>
                    {props.posts.map(post => (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                        <PostItem remove={removePost} post={post}></PostItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>



            </div>
        );
    }
}
