//TODO - Recomendaciones:
//* Mostrar carteles para evitar clicks no deseados y mostrar alertas sobre el ingreso exitoso o denegado.

const productsStart = [
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/html.webp',
        name: 'HTML',
        description: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
        category: 'Frontend',
        difficulty: 1,
        createDate: new Date('1993-10-28' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/css.png',
        name: 'CSS',
        description: 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​',
        category: 'Frontend',
        difficulty: 2,
        createDate: new Date('1996-12-17' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/js.png',
        name: 'JS',
        description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
        category: 'Frontend',
        difficulty: 4,
        createDate: new Date('1995-12-04' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/github.webp',
        name: 'GitHub',
        description: 'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2008-02-08' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/bootstrap.Default',
        name: 'Bootstrap',
        description: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2011-08-19' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/sass.png',
        name: 'SASS',
        description: 'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​ Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2006-11-28' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/less.webp',
        name: 'LESS',
        description: 'Less es un dinámico lenguaje de hojas de estilo que puede ser compilado en hojas de estilo en cascada y ejecutarse en el lado del cliente o en el lado del servidor. Diseñado por Alexis Sellier.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2009-03-12' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/reactjs.png',
        name: 'ReactJS',
        description: 'React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',
        category: 'Frontend',
        difficulty: 3,
        createDate: new Date('2013-05-29' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/mongodb.webp',
        name: 'MongoDB',
        description: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales.',
        category: 'Backend',
        difficulty: 4,
        createDate: new Date('2009-02-11' + 'T00:00:00-03:00').getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/nodejs.webp',
        name: 'NodeJS',
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        category: 'Backend',
        difficulty: 5,
        createDate: new Date('2009-05-27' + 'T00:00:00-03:00').getTime(),
    },
];

if (JSON.parse(localStorage.getItem('product')) === null) {

    localStorage.setItem('product', JSON.stringify(productsStart));

};

const usersStart = [
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Lautaro Gando',
        username: 'Gandito',
        email: 'lauticapo1910cavs@gmail.com',
        confirmEmail: 'lauticapo1910cavs@gmail.com',
        password: 'Ganditocapogaso.3',
        confirmPassword: 'Ganditocapogaso.3',
        location: 'Liniers',
        date: new Date('2001-05-22' + 'T00:00:00-03:00').getTime(),
        role: 'ADMIN',
        createDate: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Rocio Antonella Bonin',
        username: 'LaUru',
        email: 'rocioantonellabonin@gmail.com',
        confirmEmail: 'rocioantonellabonin@gmail.com',
        password: 'Rochycapa3',
        confirmPassword: 'Rochycapa3',
        location: 'Almagro',
        date: new Date('1999-08-03' + 'T00:00:00-03:00').getTime(),
        role: 'USER',
        createDate: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        image: '/assets/icons/user.png',
        fullname: 'Lucas Ezequiel Sanagua',
        username: 'Lukytas',
        email: 'lukitas@gmail.com',
        confirmEmail: 'lukitas@gmail.com',
        password: 'LuquiSanagua.1',
        confirmPassword: 'LuquiSanagua.1',
        location: 'Liniers',
        date: new Date('2004-09-07' + 'T00:00:00-03:00').getTime(),
        role: 'USER',
        createDate: new Date().getTime(),
    },
];

if (JSON.parse(localStorage.getItem('user')) === null) {

    localStorage.setItem('user', JSON.stringify(usersStart));

};

const cards = [
    {
        image: 'assets/images/html.jpg',
        title: 'HTML',
        description: 'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.',
        difficulty: 1,
    },
    {
        image: 'assets/images/css.webp',
        title: 'CSS',
        description: 'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
        difficulty: 2,
    },
    {
        image: 'assets/images/js.jpg',
        title: 'JS',
        description: 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
        difficulty: 4,
    },
    {
        image: 'assets/images/github.jpg',
        title: 'GitHub',
        description: 'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.',
        difficulty: 3,
    },
    {
        image: 'assets/images/bootstrap.jpg',
        title: 'Bootstrap',
        description: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.',
        difficulty: 3,
    },
    {
        image: 'assets/images/sass.jpg',
        title: 'SASS',
        description: 'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​ Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.',
        difficulty: 3,
    },
    {
        image: 'assets/images/less.png',
        title: 'LESS',
        description: 'Less es un dinámico lenguaje de hojas de estilo que puede ser compilado en hojas de estilo en cascada y ejecutarse en el lado del cliente o en el lado del servidor. Diseñado por Alexis Sellier.',
        difficulty: 3,
    },
    {
        image: 'assets/images/reactjs.webp',
        title: 'ReactJS',
        description: 'React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',
        difficulty: 3,
    },
    {
        image: 'assets/images/mongodb.webp',
        title: 'MongoDB',
        description: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales.',
        difficulty: 4,
    },
    {
        image: 'assets/images/nodejs.png',
        title: 'NodeJS',
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        difficulty: 5,
    },
];

const cardsHTML = document.getElementById('cards');

//? 1 - Pintar cards desde JS
const arrayProducts = JSON.parse(localStorage.getItem('product')) || [];

function paintCards(array) {

    cardsHTML.innerHTML = '';
    
    array.forEach(card => {
        
        cardsHTML.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${card.image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${card.title}</h5>
                                        <p class="card-text">${card.description}</p>
                                        <a href="#" class="btn btn-primary">${card.difficulty}</a>
                                    </div>
                                </div>`;

    });

};

paintCards(cards);
//? -----------------------------------------------------------------