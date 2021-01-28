import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <React.StrictMode>
        <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
