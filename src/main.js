// import { register, access, authWithGoogle } from './lib/index.js';
// import { loginScreen } from './view/login.js';
import { changeRoute } from './lib/router.js';
// CREACION DE PROYECTO EN EL SERVIDOR DE FIREBASE //
const init = () => {
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });

  const firebaseConfig = {
    apiKey: 'AIzaSyBMMBBn6lGE7PUp8zQNbs2hVvej5tVmVOo',
    authDomain: 'saudade-65a6b.firebaseapp.com',
    projectId: 'saudade-65a6b',
    storageBucket: 'saudade-65a6b.appspot.com',
    messagingSenderId: '981149743720',
    appId: '1:981149743720:web:34b1feb31b39e2c79399dd',
    measurementId: 'G-TCN7LTTV55',
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  window.location.hash = '#/login';
};
window.addEventListener('load', init);

