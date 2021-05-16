import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';
import { uploadImg } from '../lib/index.js';

export const memorial = () => {
  const memorialView = `
    <main>
      <section id="profileElements">
        <p class="inMemory">En memoria de: </p>
        <h1 class="nameMemorial">Lucy Gordon</h1>
        <h3 class="dateMemorial">mayo - septiembre</h3>
        <h2 class="cityMemorial">London</h2>
        <h2 class="quoteMemorial">"Algo"</h2>
        <img src="" alt="profile">
      </section>
      <section class="memorialElements">
          <h1>Memorial</h1>
          <button id="addPost">Agregar Publicación</button>
          <div id="postedContent">
          </div>
          <div memorialPosts></div>
      </section>
      <section id="modalAddPost" class="modal">
        <input type="text" id="text" placeholder="Escribe aquí tu relato">
        <input type="file" id="image">
        <button id="uploadContent" class="btnUpload">Cargar</button>
      </section>
     </main>
  `;

  const divMemorial = document.createElement('div');
  divMemorial.setAttribute('class', 'ViewMemorial');
  const divMemorialContainer = document.createElement('div');
  divMemorial.innerHTML = memorialView;
  divMemorialContainer.appendChild(header());
  divMemorialContainer.appendChild(divMemorial);
  divMemorialContainer.appendChild(footer());

  // ABRIR MODAL PARA SUBIR ARCHIVOS/POSTS
  const openModal = divMemorial.querySelector("#addPost");
  const modal = divMemorial.querySelector('#modalAddPost')
  openModal.addEventListener('click', () => {
    modal.style.display = "flex";
  })

  //SUBIR PUBLICACIÓN
  const btnPost = divMemorial.querySelector('#uploadContent');
  btnPost.addEventListener('click', () => {
    uploadImg();
  })
  return divMemorialContainer;
};
