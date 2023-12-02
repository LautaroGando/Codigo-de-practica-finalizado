//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const liRegisterHTML = document.getElementById('liRegister');
const divLoginHTML = document.getElementById('navbarSupportedContent');
const ulLogoutAndAdminHTML = document.getElementById('ulLogoutAndAdmin');

//? 1 - Crear boton de registrarse desde JS
const loginUser = JSON.parse(localStorage.getItem('login'));

const aRegister = document.createElement('a');

aRegister.innerHTML = 'REGISTRARSE';

aRegister.classList.add('nav-link');

aRegister.setAttribute('aria-disabled', 'true');
aRegister.setAttribute('href' , '#');
aRegister.setAttribute('data-bs-toggle', 'modal');
aRegister.setAttribute('data-bs-target', '#registerModal');

liRegisterHTML.appendChild(aRegister);
//? -----------------------------------------------------------------

//? 2 - Crear boton de ingresar desde JS
const buttonLoginHTML = document.createElement('button');

buttonLoginHTML.type = 'button';

buttonLoginHTML.classList.add('btn', 'btn-secondary', 'm-2');

buttonLoginHTML.setAttribute('data-bs-toggle', 'modal');
buttonLoginHTML.setAttribute('data-bs-target', '#loginModal');

divLoginHTML.appendChild(buttonLoginHTML);

const iLoginHTML = document.createElement('i');

iLoginHTML.classList.add('fa-solid', 'fa-user', 'text-dark');

buttonLoginHTML.appendChild(iLoginHTML);

//! Verificar si el usuario esta logueado eliminar los botones de registrarse y el de ingresar y a su vez pintar el de salir y convertir el de ingresar en la imagen del usuario
if (loginUser) {

    //! Verificar si el usuario es ADMIN y pintar a su vez el li del admin en el header
    if (loginUser.role === 'ADMIN') {

        const liAdmin = document.createElement('li');

        liAdmin.classList.add('nav-item', 'dropdown');

        ulLogoutAndAdminHTML.appendChild(liAdmin);

        const aAdmin = document.createElement('a');

        aAdmin.classList.add('nav-link', 'dropdown-toggle');
        aAdmin.href = '#';
        aAdmin.role = 'button';
        aAdmin.setAttribute('data-bs-toggle', 'dropdown');
        aAdmin.setAttribute('aria-expanded', 'false');
        aAdmin.innerHTML = 'ADMIN';

        liAdmin.appendChild(aAdmin);

        const ulAdmin = document.createElement('ul');

        ulAdmin.classList.add('dropdown-menu');

        liAdmin.appendChild(ulAdmin);

        const liUlAdminProducts = document.createElement('li');

        ulAdmin.appendChild(liUlAdminProducts);

        const aLiAdminProducts = document.createElement('a');

        aLiAdminProducts.classList.add('dropdown-item');
        aLiAdminProducts.href = '/pages/admin/admin-products.html';
        aLiAdminProducts.innerHTML = 'ADMINISTRAR PRODUCTOS';

        liUlAdminProducts.appendChild(aLiAdminProducts);

        const liUlAdminUsers = document.createElement('li');

        ulAdmin.appendChild(liUlAdminUsers);

        const aLiAdminUsers = document.createElement('a');

        aLiAdminUsers.classList.add('dropdown-item');
        aLiAdminUsers.href = '/pages/admin/admin-users.html';
        aLiAdminUsers.innerHTML = 'ADMINISTRAR USUARIOS';

        liUlAdminUsers.appendChild(aLiAdminUsers);

    };
    //! -------------------------------------------------------------

    liRegisterHTML.removeChild(aRegister);

    buttonLoginHTML.removeChild(iLoginHTML);
    buttonLoginHTML.removeAttribute('data-bs-toggle', 'modal');
    buttonLoginHTML.removeAttribute('data-bs-target', '#loginModal');

    const imgLogin = document.createElement('img');

    imgLogin.src = loginUser.image;

    buttonLoginHTML.appendChild(imgLogin);

    const liLogout = document.createElement('li');

    ulLogoutAndAdminHTML.appendChild(liLogout);

    const aLogout = document.createElement('a');

    aLogout.innerHTML = 'SALIR';
    aLogout.style.color = 'crimson';
    aLogout.classList.add('nav-link');
    aLogout.setAttribute('aria-disabled', 'true');
    aLogout.setAttribute('href' , '#');
    aLogout.onclick = () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
    
        swalWithBootstrapButtons.fire({
            title: `Seguro desea cerrar sesion?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, cerrar sesion!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then((result) => {
    
            if (result.isConfirmed) {
    
                localStorage.removeItem('login');

                location.reload();
    
            } else if (
    
                result.dismiss === Swal.DismissReason.cancel
    
            );
    
        });

    };

    liLogout.appendChild(aLogout);

};
//! -----------------------------------------------------------------
//? -----------------------------------------------------------------