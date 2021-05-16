import { register, authWithGoogle, access } from '../lib/index.js';

export const loginScreen = () => {
  const LoginView = `
<section id="welcomeSaudade">
   <img src="./IMAGES/LOGOINFINITE.png" alt="Logo Saudade" id="infiniteLogo">
   <h1 id="title">SAUDADE</h1>
   <p id="slogan">"Creando un Espacio para la Memoria"</p>
   <button id="btnManifiesto">Ver Manifiesto</button>
</section>
<section id="loginContent">
 <div class="enterPage">
   <button id="btnMail" class="mailButton btnDesignI">Iniciar con correo electrónico</button>
   <button id="btnGoogle" class="googleButton btnDesignI">Iniciar sesión con Google</button>
   <button id="btnRegister" class="registerButton">Registrarse </button>
 </div>
 <div id="login" class="loginButtons">
   <input type="email" id="mailLogin" placeholder="Correo electrónico">
   <input type="password" id="passLogin" placeholder="Contraseña">
   <button id="btnLogin" class="btnLogin">Ir</button>
 </div>
 <div id="register" class="registerButtons">
   <input type="email" id="mailInput" class="mailRegister" placeholder="Correo Electrónico">
   <input id="nameInput" class="nameRegister" placeholder="Nombre y Apellido">
   <input type= "password" id="passInput" class="passRegister" placeholder="Contraseña">
   <button id="btnGo" class="btnGo">Ir</button>
 </div>
</section>
`;

  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'ViewContainer');
  divLogin.innerHTML = LoginView;

  // OCULTAR - MOSTRAR INPUT DE REGISTRO E INICIO
  const bntRegisterDisplay = divLogin.querySelector('.registerButton');
  const btnLoginDisplay = divLogin.querySelector('.mailButton');

  bntRegisterDisplay.addEventListener('click', () => {
    divLogin.querySelector('.registerButtons').style.display = 'block';
    divLogin.querySelector('.loginButtons').style.display = 'none';
  });
  btnLoginDisplay.addEventListener('click', () => {
    divLogin.querySelector('.loginButtons').style.display = 'block';
    divLogin.querySelector('.registerButtons').style.display = 'none';
  });
  // REGISTRO CON CORREO Y CONTRASEÑA
  const btnRegisterGo = divLogin.querySelector('#btnGo');
  btnRegisterGo.addEventListener('click', () => {
    const mail = document.getElementById('mailInput').value;
    const pass = document.getElementById('passInput').value;
    const user = document.getElementById('nameInput').value;
    register(mail, pass)
  });
  // INICIO SESION CON CORREO Y CONTRASEÑA
  const btnLoginGo = divLogin.querySelector('#btnLogin');
  btnLoginGo.addEventListener('click', () => {
    const mailLog = document.getElementById('mailLogin').value;
    const passLog = document.getElementById('passLogin').value;
    access(mailLog, passLog);
  });

  // INGRESO CON GOOGLE
  const btnGoogleGo = divLogin.querySelector('#btnGoogle');
  btnGoogleGo.addEventListener('click', () => {
    authWithGoogle();
  });
  return divLogin;
};