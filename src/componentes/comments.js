export const comments = () => {
  const divComments = document.createElement('div');
  divComments.setAttribute('class', 'divComments');

  const db = firebase.firestore();

  const deleteCommentsUser = (id) => db.collection('posts').doc(id).delete();
  // const getPost = (id) => db.collection('posts').doc(id).get();

  db.collection('posts').onSnapshot((querySnapshot) => {
    divComments.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const commentsUser = doc.data();
      commentsUser.id = doc.id;
      divComments.innerHTML += `
      <div id="styleComments" class="styleComments">
        <h5>${commentsUser.text}</h5>
      </div>
      <div>
        <button class="btnDelete" data-id="${commentsUser.id}">Eliminar</button>
        <button class="btnEdit" data-id="${commentsUser.id}" >Editar</button>
      </div>`;

      // BOTON PARA ELIMINAR COMENTARIO
      const btnsDelete = document.querySelectorAll('.btnDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deleteCommentsUser(e.target.dataset.id);
        });
      });

      // // // BOTON PARA EDITAR COMENTARIO
      // const btnsEdit = document.querySelectorAll('.btnEdit');
      // btnsEdit.forEach((btn) => {
      //   btn.addEventListener('click', async (e) => {
      //     const doc = await getPost(e.target.dataset.id);
      //     console.log(doc.data());
      //     const postE = doc.data();
      //   });
      // });

    });
  });
  return divComments;
};
