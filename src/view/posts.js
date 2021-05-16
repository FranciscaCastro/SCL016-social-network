import { comments } from '../componentes/comments.js';
import { header } from '../componentes/header.js';

export const postsScreen = () => {
  const postsView = `
  <main id="postsElements">
    <div id="postedContent" class="postedCont">
      <img src="./IMAGES/amigas.jpg" id="postedPhoto" class="postedPicture">
      <div class="description">
        <p id="usernamePost"></p>
        <p id="postedDescription"></p>
      </div>
    </div>
    <div class="flowers">
      <p id="flowers">
        <img src="./IMAGES/flor.png" width="15" class="flower">
    </div>
    <div id="postContainer" class="postContainer">
      <textarea id="postText" placeholder="Escribe un comentario"></textarea>
      <button id="btnPost" class="postButton">Comentar</button>
    </div>
   </main>
`;
  const divPosts = document.createElement('div');
  divPosts.setAttribute('class', 'viewPosts');
  const divPostsContainer = document.createElement('div');
  divPosts.innerHTML = postsView;
  divPostsContainer.appendChild(header());
  divPostsContainer.appendChild(divPosts);
  const btnPost = divPosts.querySelector('#btnPost');
  divPostsContainer.appendChild(comments());

  btnPost.addEventListener('click', () => {
    const postComment = divPosts.querySelector('#postText').value;
    // const comment = divPosts.querySelector('#postedComments');

    const db = firebase.firestore();
    db.collection('posts').add({
      text: postComment,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        divPosts.querySelector('#postText').value = '';
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
  return divPostsContainer;
};
