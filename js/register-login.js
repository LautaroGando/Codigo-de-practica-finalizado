//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const formRegisterHTML = document.getElementById('formRegister');
const formLoginHTML = document.getElementById('formLogin');

//? 1 -  Agregar un usuario desde el formulario de registro
const usersArray = JSON.parse(localStorage.getItem('user'));

formRegisterHTML.addEventListener('submit', e => {

    e.preventDefault();

    const element = e.target.elements;

    const newUser = {
        id: crypto.randomUUID(),
        image: element.registerImage.value,
        fullname: element.registerFullname.value,
        username: element.registerUsername.value.toLowerCase(),
        email: element.registerEmail.value.toLowerCase(),
        confirmEmail: element.registerConfirmEmail.value.toLowerCase(),
        password: element.registerPassword.value,
        confirmPassword: element.registerConfirmPassword.value,
        location: element.registerLocation.value,
        date: new Date(element.registerDate.value + 'T00:00:00-03:00').getTime(),
        role: 'USER',
        createDate: new Date().getTime(),
    };

    //! - Comprobar si el correo coincide con el confirmar correo
    if (element.registerEmail.value !== element.registerConfirmEmail.value) {

        Swal.fire({
            icon: "error",
            title: "Los correos deben coincidir!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -------------------------------------------------------------

    //! - Comprobar si la clave coincide con el confirmar clave
    if (element.registerPassword.value !== element.registerConfirmPassword.value) {

        Swal.fire({
            icon: "error",
            title: "Las claves deben coincidir!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -------------------------------------------------------------

    for (const i of usersArray) {
        
        //! - Comprobar si el email ya existe
        if (i.email === element.registerEmail.value) {

            Swal.fire({
                icon: "error",
                title: "El correo electronico ya se encuentra registrado!",
                showConfirmButton: false,
                timer: 2000
            });
    
            return;

        };
        //! ---------------------------------------------------------

        //! - Comprobar si el usuario ya existe
        if (i.username === element.registerUsername.value) {

            Swal.fire({
                icon: "error",
                title: "El usuario ya se encuentra registrado!",
                showConfirmButton: false,
                timer: 2000
            });
    
            return;

        };
        //! ---------------------------------------------------------

    };

    Swal.fire({
        icon: "success",
        title: "Has sido registrado exitosamente!",
        showConfirmButton: false,
        timer: 2000
    });

    usersArray.push(newUser);

    localStorage.setItem('user', JSON.stringify(usersArray));

    setTimeout(() => {
        
        window.location.href = '/index.html';

    }, 2000);

});
//? -----------------------------------------------------------------

//? 2 - Realizar el ingreso de un usuario
formLoginHTML.addEventListener('submit', e => {

    e.preventDefault();

    const element = e.target.elements;

    const email = element.loginEmail.value.toLowerCase();
    const password = element.loginPassword.value;

    //! - Comprobar que el correo y la clave coincidan con la de un usuario registrado
    const loginUser = usersArray.find(user => user.email === email && user.password === password);
    //! -------------------------------------------------------------

    //! - Si no coincide, terminar el codigo
    if (!loginUser) {

        Swal.fire({
            icon: "error",
            title: "El correo o la clave son incorrectos!",
            showConfirmButton: false,
            timer: 2000
        });

        return;

    };
    //! -------------------------------------------------------------

    Swal.fire({
        icon: "success",
        title: "Has ingresado exitosamente!",
        showConfirmButton: false,
        timer: 2000
    });

    localStorage.setItem('login', JSON.stringify(loginUser));

    setTimeout(() => {
        
        window.location.href = '/index.html';

    }, 2000);

});
//? -----------------------------------------------------------------