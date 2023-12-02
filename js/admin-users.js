//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const tableUsersHTML = document.getElementById('tableUsers');
const formUsersHTML = document.getElementById('formUsers');
const buttonFormUsersHTML = formUsersHTML.querySelector('button[type="submit"]');
const buttonSearchUsersHTML = formUsersHTML.querySelector('button[type="button"]');
const searchHTML = document.getElementById('search');

//? 9 - Hacer Local Storage
const users = JSON.parse(localStorage.getItem('user'));

function updateStorage() {
    
    localStorage.setItem('user', JSON.stringify(users));

};
//? -----------------------------------------------------------------

//? 1 - Pintar la tabla
function paintUsers(array) {

    tableUsersHTML.innerHTML = '';

    array.forEach(user => {

        tableUsersHTML.innerHTML += `<tr>
                                            <td>
                                                <img src="${user.image}" alt="">
                                            </td>
                                            <td>${user.fullname}</td>
                                            <td>${user.username}</td>
                                            <td>${user.email}</td>
                                            <td>${user.location}</td>
                                            <td>${formatDate(user.date)}</td>
                                            <td>${user.role}</td>
                                            <td>${formatDate(user.createDate)}</td>
                                            <td>
                                                <button onclick="editUser('${user.id}', '${user.username}')">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button onclick="deleteUser('${user.id}', '${user.username}')">
                                                    <i class="fa-solid fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>`;

    });

};

paintUsers(users)
//? -----------------------------------------------------------------

//? 2 - Formatear la fecha
function formatDate(date) {

    const objectIntl = new Intl.DateTimeFormat('es-AR', {

        day: '2-digit',
        month: '2-digit',
        year: 'numeric',

    });

    const formatIntl = objectIntl.format(date);

    return formatIntl;

};
//? -----------------------------------------------------------------

//? 3 - Eliminar usuario
function deleteUser(id, name) {

    const searchUser = users.findIndex(user => user.id === id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: `Seguro desea eliminar el usuario ${name}?`,
        text: "Los cambios no seran reversibles!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {

        if (result.isConfirmed) {

            swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: `${name} ha sido eliminado!`,
                icon: "success"
            });

            users.splice(searchUser, 1);

            paintUsers(users);

            updateStorage();

        } else if (

            result.dismiss === Swal.DismissReason.cancel

        ) {

            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: `${name} no ha sido eliminado!`,
                icon: "error"
            });

        };

    });

};
//? -----------------------------------------------------------------

//? 4 - Editar usuario
function editUser(id, name) {

    const searchUser = users.find(user => user.id === id);

    const element = formUsersHTML.elements;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: `Seguro desea editar el usuario ${name}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, editar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {

        if (result.isConfirmed) {

            element.id.value = searchUser.id;
            element.image.value = searchUser.image;
            element.fullname.value = searchUser.fullname;
            element.username.value = searchUser.username;
            element.email.value = searchUser.email;
            element.confirmEmail.value = searchUser.confirmEmail;
            element.password.value = searchUser.password;
            element.confirmPassword.value = searchUser.confirmPassword;
            element.location.value = searchUser.location;
            element.date.value = formatInputDate(searchUser.date);
            element.role.value = searchUser.role;
            element.createDate.value = formatInputDate(searchUser.createDate);
        
            formUsersHTML.querySelector('h2').innerHTML = 'EDITAR USUARIO';
            buttonFormUsersHTML.innerHTML = 'EDITAR';

        } else if (

            result.dismiss === Swal.DismissReason.cancel

        ) {

            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: `${name} no ha sido editado!`,
                icon: "error"
            });

        };

    });

};
//? -----------------------------------------------------------------

//? 5 - Formatear el input de la fecha
function formatInputDate(date) {
    
    const objectDate = new Date(date);

    const year = objectDate.getFullYear();

    let month = objectDate.getMonth() + 1;

    if (month < 10) {

        month = `0${month}`;

    };

    const day = objectDate.getDate().toString().padStart(2, '0');

    date = `${year}-${month}-${day}`;

    return date;

};
//? -----------------------------------------------------------------

//? 6 - Agregar o editar usuario
formUsersHTML.addEventListener('submit', (e) => {

    e.preventDefault();

    const element = e.target.elements;

    const id = element.id.value ? element.id.value : crypto.randomUUID();

    const newUser = {
        id: id,
        image: element.image.value,
        fullname: element.fullname.value,
        username: element.username.value.toLowerCase(),
        email: element.email.value.toLowerCase(),
        confirmEmail: element.confirmEmail.value.toLowerCase(),
        password: element.password.value,
        confirmPassword: element.confirmPassword.value,
        location: element.location.value,
        date: new Date(element.date.value + 'T00:00:00-03:00').getTime(),
        role: element.role.value.toUpperCase(),
        createDate: new Date().getTime(),
    };

    //! - Comprobar si el correo coincide con el confirmar correo
    if (element.email.value.toLowerCase() !== element.confirmEmail.value.toLowerCase()) {

        Swal.fire({
            icon: "error",
            title: "Los correos deben coincidir!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -----------------------------------------------------------

    //! - Comprobar si la clave coincide con el confirmar clave
    if (element.password.value !== element.confirmPassword.value) {

        Swal.fire({
            icon: "error",
            title: "Las claves deben coincidir!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -----------------------------------------------------------

    //! - Comprobar si el email ya existe
    const searchEmail = users.find(user => user.email.toLowerCase() === element.email.value.toLowerCase());

    if (searchEmail && searchEmail.id !== element.id.value) {

        Swal.fire({
            icon: "error",
            title: "El correo electronico ya se encuentra registrado!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -----------------------------------------------------------

    //! - Comprobar si el usuario ya existe
    const searchUser = users.find(user => user.username.toLowerCase() === element.username.value.toLowerCase());

    if (searchUser && searchUser.id !== element.id.value) {

        Swal.fire({
            icon: "error",
            title: "El usuario ya se encuentra registrado!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -----------------------------------------------------------

    if (element.id.value) {

        const index = users.findIndex(user => user.id === element.id.value);

        Swal.fire({
            icon: "success",
            title: "El usuario ha sido editado exitosamente!",
            showConfirmButton: false,
            timer: 2000
        });

        users[index] = newUser;

    } else {

        Swal.fire({
            icon: "success",
            title: "El usuario ha sido registrado exitosamente!",
            showConfirmButton: false,
            timer: 2000
        });

        users.push(newUser);

    };

    paintUsers(users);

    resetForm();

    updateStorage();

});
//? -----------------------------------------------------------------

//? 7 - Resetear formulario
function resetForm() {
    
    formUsersHTML.reset();

    buttonFormUsersHTML.innerHTML = 'AGREGAR';
    formUsersHTML.querySelector('h2').innerHTML = 'AGREGAR USUARIO';

    formUsersHTML.elements.id.value = '';

    formUsersHTML.elements.image.focus();

};
//? -----------------------------------------------------------------

//? 8 - Buscar usuario cuando se haga click en el boton buscar
searchHTML.addEventListener('keyup', e => {

    buttonSearchUsersHTML.addEventListener('click', () => {

        const element = e.target.value.toLowerCase();

        const searchUser = users.filter(user => {
    
            const nameUser = user.username.toLowerCase();
    
            if (nameUser.includes(element)) {
    
                return true;
    
            };
    
            return;
    
        });
    
        paintUsers(searchUser);

    });

});
//? -----------------------------------------------------------------