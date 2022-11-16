import {MyButton} from "./UI/button/MyButton";


export const PostItem = (props) => {

        return (
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}_ {props.post.title}: {props.post.body}</strong>
                </div>
                <div className="post__btn">
                    <MyButton text={'GO'}/>
                </div>
            </div>
    );
}
