import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';
import { userName } from '../lib/index.js';

export const profile = () => {
  // <!-- PAGINA DE PERFIL -->
  const profileView = `

  <main>
  <div id="creationProfile" class= "creationProfile">
    <div class = "infProfile">
      <figure>
        <img src="IMAGES/imgPerfil.png" class="circleImg" width="80%">
      </figure>
    </div>
    <div id="infPersonal" class= "infProfile">
    <h4 id="name"></h4>
     <h4>Ciudad de Residencia</h4>
     <h4>Extra</h4>
    </div>
  </div>
   <hr>
  <div id="memorialsCreated">
    <div class="title">
      <h3>Memoriales Creados</h3>
    </div>
    <div class="imagesM"> 
      <img src="IMAGES/Luci.png" width="23%" alt="memorialsCreatedLucy" id="Lucy"> 
      <img src="IMAGES/EstellaT.png" width="23%" alt="memorialCreatedEstellaT">
      <img src="IMAGES/OliviaH.png" width="23%" alt="memorial CreadoOliviaH">
      <img src="IMAGES/imgCrear.png" width="23%" alt="createdMemorial">
    </div>
  </div>
  <hr>
  <div id="memorialesFollowed">
    <div class="title">
      <h3>Memoriales Seguidos</h3>
    </div>
    <div class="imagesM">
      <img src="IMAGES/AlbertU.png" width="23%" alt="memorialFollowingAlabertU">
      <img src="IMAGES/Lucia Bose.png" width="23%" alt="memorialFolllowingLuciaB">
      <img src="IMAGES/Kelly Preston.png" width="23%" alt="memorialFollowingKellyP">
      <img src="IMAGES/Lucia Bose2.png" width="23%" alt="memorialFollowingLucia">
    </div>
  </div>
  
</main>
`;
  const divProfile = document.createElement('div');
  divProfile.setAttribute('class', 'viewProfile');
  const divProfileContainer = document.createElement('div');
  divProfileContainer.setAttribute('class', 'ProfileContainer');
  divProfile.innerHTML = profileView;
  divProfileContainer.appendChild(header());
  divProfileContainer.appendChild(divProfile);
  divProfileContainer.appendChild(footer());
  userName();

  const btnMemorial = divProfile.querySelector('#Lucy');
  btnMemorial.addEventListener('click', () => {
    window.location.hash = '#/memorial';
  });

  const btnMemorial = divProfile.querySelector('#Lucy');
  btnMemorial.addEventListener('click', () => {
    window.location.hash = '#/memorial';
  })
  return divProfileContainer;
};

