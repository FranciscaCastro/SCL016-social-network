export const header = () => {
  const headerView = `
  <header>
  <nav class="menuPricipal ">
    <ul class="container">
      <li ><i class="far fa-user-circle fa-lg " ></i>
        <div class="submenu">
          <ul>
            <li class = "submenu_item"><i class="far fa-user-circle "></i></li>
            <li class = "submenu_item">Nombre de Usuario</li>
            <li class = "submenu_item">Correo electronico</li>
          </ul> 
          <ul class = "b_item">
            <li class = "submenu_item1">Editar perfil</li>
            <li>Ver Manifiesto</li>
          </ul>
          <ul class = "b_item">
            <li>Cerrar Sesion</li>
            <li>Eliminar perfil</li>
          </ul>
        </div>
      </li>
      <li><img src="IMAGES/SMALL LOGO.png" class="headerLogo" width="90" alt="Logo "></li>
      <li class="icons"><i class="fas fa-search fa-lg "></i> <i class="fas fa-bell fa-lg" ></i></li>
    </ul>
  </nav>
</header>
`;

  const divHeader = document.createElement('div');
  divHeader.setAttribute('class', 'ViewHeader');
  divHeader.innerHTML = headerView;

  return divHeader;
};
