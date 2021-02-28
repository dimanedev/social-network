import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createRef} from "react/cjs/react.production.min";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";


const MyPosts = (props) => {

  let myPostsElements = props.myPostsData.map(el =>
      <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
  )

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
      <div className={s.posts}>
        <h3 className={s.myPosts}>My posts</h3>
        <div>
          <div>
            <textarea
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