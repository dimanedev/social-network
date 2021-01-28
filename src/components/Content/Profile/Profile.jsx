import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
          myPostsData={props.state.myPostsData}
          addPost={props.addPost}
          newPostText={props.state.newPostText}
          updateNewPostText={props.updateNewPostText}/>
    </div>
  );
}

export default Profile;