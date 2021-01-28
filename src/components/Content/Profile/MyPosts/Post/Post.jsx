import s from "./Post.module.css";


const Post = (props) => {
  return (
      <div className={s.item}>
        <img className={s.ava} src='https://www.meme-arsenal.com/memes/6c71f3493b7da1331b59c19d335b972a.jpg' alt='avatar'/>
        <div className={s.name}>{props.name}</div>
        <p>{props.message}</p>
        <div className={s.like}>
          <img src='https://image.similarpng.com/very-thumbnail/2020/06/Like-button-blue-facebook-transparent-PNG.png' alt='like-button' className={s.likeButton}/>
          <span>{props.likesCount} likes</span>
        </div>
      </div>
  );
}

export default Post;