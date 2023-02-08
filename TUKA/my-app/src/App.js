import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import img1 from './images/111.jpg';
import img2 from './images/222.jpg';
import img3 from './images/333.webp';
import img4 from './images/444.jpg';
import img5 from './images/555.png';
import img6 from './images/666.webp';
import img7 from './images/777.jpg';
import img8 from './images/888.jpg';
import img9 from './images/999.jpg';
import img10 from './images/1010.jpg';
import img11 from './images/1111.jpg';
import img12 from './images/1212.jpg';
import img13 from './images/1313.jpg';
import img14 from './images/1414.png';
import img15 from './images/151515.png';

const Post = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    
    <div className="post">
      <div className="post-header">
      <img src={props.src} alt="Image" />
      </div>
      <div className="post-actions">
        <button id="lajkovi" onClick={handleLikeClick}>
          ❤️ {likes} Likes
        </button>
      </div>
      <div className="post-comments">
        {comments.map((comment) => (
          <p>{comment}</p>
        ))}
      </div>
      <div className="post-comment-form">
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Напиши коментар..."
          />
          <button id="kopce" type="submit">Submit</button>
        </form>
        
      </div>
      
    </div>
    
  );
};

const InstagramPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15];
    setImages(images);
  }, []);
  return (
    
    <div className="instagram-page">
      <h1 id="naslov">Instagram галерија</h1>
      <div className="posts">
      {images.map((src, i) => (
          <div className="post-container" key={i}>
            <Post src={src} />
          </div>
        ))}
      </div>
      <style>
        {`.posts {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
          }
          body {
            background-color: #4636f4;
          }
          .post-container {
            width: 30%;
            text-align: center;
          }
          #kopce {
              color: purple;
              background-color: lightyellow;
              border-radius: 50%;
          }
          .post-comment-form input {
            margin-right: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          
          .post-comment-form button {
            margin-top: 10px;
          }
          .instagram-page{
            text-align: center;
          }
          .post-comment {
            margin-top: 20px;
            margin-bottom: 20px;
          }
          #lajkovi {
            margin-top: 10px;
            margin-bottom: 10px;
          }
          #naslov
          {
            font-size:50px;
          }
          .post-header img {
            width: 90%;
            height: auto;
            border-radius: 10px;
            margin-right: 10px;
            margin-left: 10px;
          }`
          }
      </style>
      <a href="http://127.0.0.1:5500/mojproekt.html">
      <button id="kopcee">Врати се на почетната страна</button>
    </a>
    </div>
  );
};

export default InstagramPage;


function App() {
  return (
    <div className="App">
      sara
    </div>
  );
}


