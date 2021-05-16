/* eslint-disable default-case */
import { loginScreen } from '../view/login.js';
import { profile } from '../view/profile.js';
import { memorial } from '../view/memorial.js';
import { postsScreen } from '../view/posts.js';
// import {} from '../view/posts.js';

export const changeRoute = (hash) => {
  //   if (window.location.hash == '#/login') {
  if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/profile') {
    return showTemplate(hash);
  } if (hash === '#/memorial') {
    return showTemplate(hash);
  } if (hash === '#/posts') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('rootLogin');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
      containerRoot.appendChild(loginScreen());
      break;
    case '#/profile':
      containerRoot.appendChild(profile());
      break;
    case '#/memorial':
      containerRoot.appendChild(memorial());
      break;
    case '#/posts':
      containerRoot.appendChild(postsScreen());
      break;
    default:
      containerRoot.innerHTML = '<h1>404<h1>';
      break;
  }
};
