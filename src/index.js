import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postItems = [
    {id: 1, post: '"It\'s my first project"', likesCount: 23},
    {id: 2, post: 'Good luck', likesCount: 15}
];
let dialogsData = [
    {name: 'Berik', id: 1, avatar: 'https://i.imgur.com/QgUzuSF.jpg'},
    {
        name: 'Serik',
        id: 2,
        avatar: 'https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg'
    }
];
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'What are you doing?'}];

ReactDOM.render(
  <React.StrictMode>
    <App post = {postItems} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
