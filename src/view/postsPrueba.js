import { deletePost, likes } from '../lib/index.js';

export const interactions = () => {
  firebase.firestore().collection('publications').orderBy('date', 'desc')
    .onSnapshot((post) => {
      const divPosts = document.querySelector('div');
      const postContainer = divPosts.querySelector('#postComments');
      postContainer.innerHTML = '';
      post.forEach((doc) => {
        const publicationDiv = `
        <div id="postArea" class="divComments">
        <div id="styleComments" class="styleComments">
           <span class="a">${doc.data().date}</span> 
           <span class="username">${doc.data().name || doc.data().email}</span>
           <h5 id="postText" type="text">${doc.data().text}</h5>
        </div>
        <div>
        <button class="btnDelete crudBtn" data-id="${doc.data().id}">Eliminar</button>
        <button class="btnEdit crudBtn" data-id="${doc.data().id}" >Editar</button>
        </div>
        <div class="flowers">
        <span id="flowersNum" class="a">${(doc.data().likes)} flores recibidas</h4>
        <img src="./IMAGES/flor.png" width="15" class="flower">
      </div>
      <div id="newText" class="newText"></div>       
      </div>`;

        const containerPosts = document.createElement('div');
        postContainer.appendChild(containerPosts);
        containerPosts.innerHTML = publicationDiv;

        // EDITAR
        const editPost = (uid) => {
          const editableText = containerPosts.querySelector('#postText');
          editableText.style.display = 'none';

          const newText = containerPosts.querySelector('#newText');
          newText.innerHTML = `
        <textarea id="editText">${doc.data().text}</textarea>
        <div id="buttonsEdit">
            <button id="save">Guardar</button>
            <button id="cancel">Cancelar</button>   
        </div>`;

          // eslint-disable-next-line no-shadow
          const editPost = newText.querySelector('#editText');
          const btnSave = newText.querySelector('#save');
          const btnCancel = document.querySelector('#cancel');

          btnCancel.addEventListener('click', () => {
            newText.innerHTML = '';
            editableText.style.display = 'flex';
          });

          btnSave.onclick = () => {
            const postRef = firebase.firestore().collection('publications').doc(uid);
            return postRef.update({
              text: editPost.value,
            })
              .then(() => {
                // eslint-disable-next-line no-console
                console.log('Post editado');
                newText.style.display = 'hidden';
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.error('Error al editar ', error);
              });
          };
        };

        // BOTÓN  EDITAR
        const btnEdit = containerPosts.querySelector('.btnEdit');
        btnEdit.addEventListener('click', () => {
          editPost(doc.id, doc.data().text);
        });

        // BOTÓN ELIMINAR
        const btnDelete = containerPosts.querySelector('.btnDelete');
        btnDelete.addEventListener('click', () => {
          deletePost(doc.id);
        });

        // BOTÓN LIKES
        const btnFlowers = containerPosts.querySelector('.flower');
        btnFlowers.addEventListener('click', () => {
          likes(doc.id);
        });
      });
    });
};
