import s from './Content.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import {Route} from 'react-router-dom';
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";

const Content = (props) => {
  return (
      <div className={s.content}>
        <Route path='/profile' render={() => (
            <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        )}/>
        <Route path='/dialogs' render={() => (
            <Dialogs
                state={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}/>
        )}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
  );
}

export default Content;