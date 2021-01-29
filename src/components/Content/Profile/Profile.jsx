import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts myPostsData={props.state.myPostsData}
               dispatch={props.dispatch}
               newPostText={props.state.newPostText} />
    </div>
  );
}

export default Profile;