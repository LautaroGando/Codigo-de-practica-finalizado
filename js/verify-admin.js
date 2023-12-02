//? 1 - Verificar si hay un usuario ingresado y si ese usuario es ADMIN, al contrario que regrese al inicio inmediatamente
const loginUserVerify = JSON.parse(localStorage.getItem('login'));

if (!loginUserVerify || loginUserVerify.role !== 'ADMIN') {

    window.location.href = '/index.html';

};
//? -----------------------------------------------------------------