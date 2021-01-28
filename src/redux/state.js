let rerenderEntireTree = () => {
  console.log(1);
}

let state = {
  profilePage: {
    myPostsData: [
      {id: '1', message: 'Hi, how are you?', likesCount: '105'},
      {id: '2', message: 'It\'s my third post', likesCount: '83'},
      {id: '3', message: 'Hello everyone! I learn REACT', likesCount: '5 945 348'},
      {id: '4', message: 'It\'s my first post', likesCount: '12'}
    ],
    newPostText: ''
  },

  dialogsPage: {
    dialogsData: [
      {name: 'Lionya', id: 1, avatarAddress: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg'},
      {name: 'Grisha', id: 2, avatarAddress: 'https://www.perunica.ru/uploads/posts/2019-03/1552932150_1.jpg'},
      {name: 'Olya', id: 3, avatarAddress: 'https://i.pinimg.com/originals/db/43/46/db43463d7a017a65017e20aee86679c5.jpg'},
      {name: 'Nastya', id: 4, avatarAddress: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU'}
    ],
    messagesData: [
      {id: '0', message: 'Hello!'},
      {id: '1', message: 'Hi, how are you?'},
      {id: '2', message: 'Yo'},
      {id: '3', message: 'What are you doing now?'},
      {
        id: '4',
        message: 'Victoria was a daughter of the Duke of Kent, one of the sons of George III. She succeeded her uncle, William IV, in 1837 when she was a girl of eighteen. She died in 1901 a fabulous old lady, having celebrated her Jubilee in 1887 and her Diamond Jubilee in 1897. These two Jubilees, marking Victoria’s fiftieth and sixtieth anniversaries on the throne, were celebrated with enormous pomp and ceremony, and represented the British Empire at its height.'
      },
    ],
    newMessageText: ''
  },

  sidebar: {
    friendsData: [
      {id: '1', name: 'Lionya', avatarAddress: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg'},
      {id: '2', name: 'Grisha', avatarAddress: 'https://www.perunica.ru/uploads/posts/2019-03/1552932150_1.jpg'},
      {id: '3', name: 'Olya', avatarAddress: 'https://i.pinimg.com/originals/db/43/46/db43463d7a017a65017e20aee86679c5.jpg'},
    ]
  }
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export const addPost = () => {
  let post = {
    id: '5',
    message: state.profilePage.newPostText,
    likesCount: '0'
  }
  state.profilePage.myPostsData.unshift(post);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
  debugger;
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: '5',
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (text) => {
  state.dialogsPage.newMessageText = text;
  rerenderEntireTree(state);
}

export default state;