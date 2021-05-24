// import { comments } from '../componentes/comments.js';
import { header } from '../componentes/header.js';
import { interactions } from './postsPrueba.js';
import { addPost } from '../lib/index.js';

export const postsScreen = () => {
  const postsView = `
  <main id="postsElements">
    <div id="postedContent" class="postedCont">
      <img src="./IMAGES/amigas.jpg" id="postedPhoto" class="postedPicture">
    </div>
    <div id="postContainer">
      <textarea id="postText" placeholder="Escribe un comentario"></textarea>
      <button id="btnPost" class="postButton">Comentar</button>
    </div>
    <div id="postComments"></div>    
   </main>
`;
  const divPosts = document.createElement('div');
  divPosts.setAttribute('class', 'viewPosts');
  const divPostsContainer = document.createElement('div');
  divPosts.innerHTML = postsView;
  const btnPost = divPosts.querySelector('#btnPost');
  const comment = divPosts.querySelector('#postText');
  const currentUser = firebase.auth().currentUser;
  divPostsContainer.appendChild(header());
  divPostsContainer.appendChild(divPosts);
  interactions();
  // divPostsContainer.appendChild(comments());

  btnPost.addEventListener('click', () => {
    addPost(currentUser, comment);
  });
  return divPostsContainer;
};
