import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createRef} from "react/cjs/react.production.min";


const MyPosts = (props) => {

  let myPostsElements = props.myPostsData.map(el =>
      <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
  )

  let textarea = createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let updateNewPostText = () => {
    let text = textarea.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }

  return (
      <div className={s.posts}>
        <h3 className={s.myPosts}>My posts</h3>
        <div>
          <div>
            <textarea
                ref={textarea}
                onChange={updateNewPostText}
                value={props.newPostText}/>
          </div>
          <div>
            <button onClick={addPost}>new post</button>
          </div>
        </div>
        {myPostsElements}
      </div>
  );
}

export default MyPosts;