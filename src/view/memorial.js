import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';
// import { uploadImg } from '../lib/index.js';

export const memorial = () => {
  const memorialView = `
  <section id="profileElements">
    <div id="personMemorial">
      <img src="./IMAGES/LUCY GORDON.jpeg" class="circleProfilePhoto">
    </div>
    <div id="infoText">
      <p class="inMemory">En memoria de: </p>
      <h1 class="nameMemorial"> Lucy Gordon</h1>
      <p class="dateMemorial">(Mayo - Septiembre)</p>
      <p class="cityMemorial"><i class="fas fa-map-marker-alt"></i> London, UK. </p> <br>
      <p class="quoteMemorial">“There is nothing either good or bad, but thinking makes it so.”</p>
    </div>
  </section>
  <hr>
  <section class="memorialElements">
    <div class="titleMemorial">
      <h1 class="title"> Espacio Memorial</h1>
      <img src="./IMAGES/flor.png" width="15"> 
    </div>
    <div id="imagesMemorial"> <a href="#/posts">
        <img src="./IMAGES/paseo.jpg" alt="" class="imgMemorial" id="paseo">
        <img src="./IMAGES/picnic.jpg" alt="" class="imgMemorial">
        <img src="./IMAGES/amigas.jpg" alt="" class="imgMemorial">
        <img src="./IMAGES/boda.jpeg" alt="" class="imgMemorial">
        <img src="./IMAGES/playa.jpg" alt="" class="imgMemorial">
        <img src="./IMAGES/trekking.jpg" alt="" class="imgMemorial">
    </div>
  </section>

  `;

  const divMemorial = document.createElement('div');
  divMemorial.setAttribute('class', 'ViewMemorial');
  const divMemorialContainer = document.createElement('div');
  divMemorial.innerHTML = memorialView;
  divMemorialContainer.appendChild(header());
  divMemorialContainer.appendChild(divMemorial);
  divMemorialContainer.appendChild(footer());

  const clickLucy = divMemorial.querySelector('.imgMemorial');
  clickLucy.addEventListener('click', () => {
    window.location.hash = '#/posts';
  });

  // // ABRIR MODAL PARA SUBIR ARCHIVOS/POSTS
  // const openModal = divMemorial.querySelector('#addPost');
  // const modal = divMemorial.querySelector('#modalAddPost');
  // openModal.addEventListener('click', () => {
  //   modal.style.display = 'flex';
  // });

  // // SUBIR PUBLICACIÓN
  // const btnPost = divMemorial.querySelector('#uploadContent');
  // btnPost.addEventListener('click', () => {
  //   uploadImg();
  // });
  return divMemorialContainer;
};
