import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';
import { userName } from '../lib/index.js';


export const profile = () => {
  // <!-- PAGINA DE PERFIL -->
  const profileView = `

<main>
  <div id="creationProfile">
    <div class = "infProfile">
      <figure>
        <img src="IMAGES/imgPerfil.png" width="135">
      </figure>
    </div>
    <div id="infPersonal">
     <h4 id='name'></h4>
     <h4>Ciudad de Residencia</h4>
     <h4>Extra</h4>
    </div>
  </div>
    <hr>
    <div id="memorialsCreated">
      <h3>Memoriales Creados</h3>
      <img src="IMAGES/Luci.png" alt="memorialsCreatedLucy" id="Lucy">
      <img src="IMAGES/imagen 1.png" alt="memorialCreatedEstellaT">
      <img src="IMAGES/imagen 2.png" alt="memorial CreadoOliviaH">
      <img src="IMAGES/Group 1.png" alt="createdMemorial">
    </div>
    <hr>
    <div id="memorialesFollowed">
      <h3>Memoriales Seguidos</h3>
      <img src="IMAGES/imagen 3(1).png" alt="memorialFollowingAlabertU">
      <img src="IMAGES/Lucia Bose.png" alt="memorialFolllowingLuciaB">
      <img src="IMAGES/Kelly Preston.png" alt="memorialFollowingKellyP">
      <img src="IMAGES/Lucia Bose2.png" alt="memorialFollowingLucia">
    </div>
  </div>
</main>
`;
  const divProfile = document.createElement('div');
  divProfile.setAttribute('class', 'ViewProfile');
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
  })
  return divProfileContainer;
};

