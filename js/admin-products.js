//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const tableProductsHTML = document.getElementById('tableProducts');
const formProductsHTML = document.getElementById('formProducts');
const buttonFormProductsHTML = formProductsHTML.querySelector('button[type="submit"]');
const buttonSearchProductsHTML = formProductsHTML.querySelector('button[type="button"]');
const searchHTML = document.getElementById('search');

//? 9 - Hacer Local Storage
const products = JSON.parse(localStorage.getItem('product'));

function updateStorage() {
    
    localStorage.setItem('product', JSON.stringify(products));

};
//? -----------------------------------------------------------------

//? 1 - Pintar la tabla
function paintProducts(array) {

    tableProductsHTML.innerHTML = '';

    array.forEach(product => {

        tableProductsHTML.innerHTML += `<tr>
                                            <td>
                                                <img src="${product.image}" alt="">
                                            </td>
                                            <td>${product.name}</td>
                                            <td>${product.description}</td>
                                            <td>${product.category}</td>
                                            <td>${product.difficulty}</td>
                                            <td>${formatDate(product.createDate)}</td>
                                            <td>
                                                <button onclick="editProduct('${product.id}', '${product.name}')">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button onclick="deleteProduct('${product.id}', '${product.name}')">
                                                    <i class="fa-solid fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>`;

    });

};

paintProducts(products);
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

//? 3 - Eliminar producto
function deleteProduct(id, name) {

    const searchProduct = products.findIndex(product => product.id === id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: `Seguro desea eliminar el producto ${name}?`,
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

            products.splice(searchProduct, 1);

            paintProducts(products);

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

//? 4 - Editar producto
function editProduct(id, name) {

    const searchProduct = products.find(product => product.id === id);

    const element = formProductsHTML.elements;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: `Seguro desea editar el producto ${name}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, editar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {

        if (result.isConfirmed) {

            element.id.value = searchProduct.id;
            element.image.value = searchProduct.image;
            element.name.value = searchProduct.name;
            element.description.value = searchProduct.description;
            element.category.value = searchProduct.category;
            element.difficulty.value = searchProduct.difficulty;
            element.createDate.value = formatInputDate(searchProduct.createDate);
        
            formProductsHTML.querySelector('h2').innerHTML = 'EDITAR PRODUCTO';
            buttonFormProductsHTML.innerHTML = 'EDITAR';

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

//? 6 - Agregar o editar producto
formProductsHTML.addEventListener('submit', (e) => {

    e.preventDefault();

    const element = e.target.elements;

    const id = element.id.value ? element.id.value : crypto.randomUUID();

    const newProduct = {
        id: id,
        image: element.image.value,
        name: element.name.value,
        description: element.description.value,
        category: element.category.value,
        difficulty: element.difficulty.value,
        createDate: new Date(element.createDate.value + 'T00:00:00-03:00').getTime(),
    };

    if (element.id.value) {

        const index = products.findIndex(product => product.id === element.id.value);

        products[index] = newProduct;

    } else {

        products.push(newProduct);

    };

    paintProducts(products);

    resetForm();

    updateStorage();

});
//? -----------------------------------------------------------------

//? 7 - Resetear formulario
function resetForm() {
    
    formProductsHTML.reset();

    buttonFormProductsHTML.innerHTML = 'AGREGAR';
    formProductsHTML.querySelector('h2').innerHTML = 'AGREGAR PRODUCTO';

    formProductsHTML.elements.id.value = '';

    formProductsHTML.elements.image.focus();

};
//? -----------------------------------------------------------------

//? 8 - Buscar producto cuando se haga click en el boton buscar
searchHTML.addEventListener('keyup', e => {

    buttonSearchProductsHTML.addEventListener('click', () => {

        const element = e.target.value.toLowerCase();

        const searchProduct = products.filter(product => {
    
            const nameProduct = product.name.toLowerCase();
    
            if (nameProduct.includes(element)) {
    
                return true;
    
            };
    
            return;
    
        });
    
        paintProducts(searchProduct);

    });

});
//? -----------------------------------------------------------------