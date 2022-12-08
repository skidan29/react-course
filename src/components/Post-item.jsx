import {MyButton} from "./UI/button/MyButton";


export const PostItem = (props) => {
        const removePost = () => {
            props.remove(props.post)
        }

        return (
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}_ {props.post.title}: {props.post.body}</strong>
                </div>
                <div className="post__btn">
                    <MyButton onClick={removePost}>Удалить</MyButton>
                </div>
            </div>
    );
}
