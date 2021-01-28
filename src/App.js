import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter} from 'react-router-dom';
import Message from "./components/Content/Dialogs/Messages/Message/Message";
import DialogsItem from "./components/Content/Dialogs/DialogsItems/DialogsItem/DialogsItem";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar state={props.state.sidebar}/>
          <Content
              state={props.state}
              addPost={props.addPost}
              addMessage={props.addMessage}
              updateNewPostText={props.updateNewPostText}
              updateNewMessageText={props.updateNewMessageText}/>
        </div>
      </BrowserRouter>
  );
}

export default App;