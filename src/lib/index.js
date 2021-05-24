// REGISTRO CON CORREO Y CONTRASEÑA //
export const register = (mail, pass) => {
  firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then((credential) => {
      const divLogin = document.querySelector('div');
      const user = divLogin.querySelector('#nameInput').value;
      // eslint-disable-next-line no-shadow
      const mail = document.getElementById('mailInput').value;
      credential.user.updateProfile({
        displayName: user,
      });
      firebase.firestore().collection('users').doc(credential.user.uid).set({
        displayName: user,
        email: mail,
      })
        .then((docRef) => {
          alert('Los datos fueron guardados correctamente!');
        })
        .catch((error) => {
          alert('Los datos no pudieron ser guardados :(');
        });
    })
    .then(() => {
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Correo inválido');
      } else if (errorCode === 'auth/weak-password') {
        alert('Su contraseña debe tener minimo 6 carácteres');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('Cuenta existente');
      }
      alert(errorMessage);
    });
};
// INICIO DE SESION CON CORREO Y CONTRASEÑA //
export const access = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      alert('Correo electrónico o contraseña inválido');
    });
};
// AUTENTICACION CON GOOGLE //
export const authWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // @type
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/profile';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      alert(errorMessage);
      firebase.auth().signInWithRedirect(provider);
    });
};

// ESTA PINTA NOMBRE DE USUARIO
export const userName = (user) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const uid = (firebase.auth().currentUser).uid;
      firebase.firestore().collection('users').doc(uid).get()
        .then((doc) => {
          const divProfile = document.querySelector('div');
          divProfile.querySelector('#name').innerHTML = `${doc.data().displayName}`;
        });
    }
  });
};

// POST
export const addPost = (user, post) => {
  firebase.firestore().collection('publications').add({
    date: new Date().toLocaleString(),
    text: post.value,
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    likes: 0,
  })
    .then((result) => console.log(result))
    .catch(error => console.log(error));
};

export const likes = (uid) => {
  firebase.firestore().collection('publications').doc(uid).get()
    .then((doc) => {
      // const user = firebase.auth().currentUser;
      // const userId = user.uid
      // if ((doc.data()).includes(uid)) {
      //   console.log(doc.data())
      // }
      const increaseFlowers = firebase.firestore.FieldValue.increment(1);
      firebase.firestore().collection('publications').doc(uid).update({
        likes: increaseFlowers,
      });
      console.log('liked');
    });
};

export const deletePost = (uid) => {
  firebase.firestore().collection('publications').doc(uid).delete()
    .then(() => {
      console.log('¡Entrada eliminada!');
      alert('¡Entrada eliminada!')
    })
    .catch((error) => {
      alert('No fue posible eliminar la entrada :(')
    });
};

// FUNCIÓN PARA GUARDAR CONTENIDO EN FIRESTORE CLOUD
// export const uploadImg = () => {
//   const uid = (firebase.auth().currentUser).uid;
//   const divMemorial = document.querySelector('div');
//   const file = divMemorial.querySelector('#image');
//   const storageRef = firebase.storage().ref(`PostedImages/${uid}/${file.name}`);
//   storageRef.put(file)
//     .then((snapshot) => {
//       console.log('Uploaded a blob or file!');
//       snapshot.ref.getDownloadURL();
//     });
// };
