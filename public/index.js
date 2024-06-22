var contenedorDom;
var navContainer;
var navigationBar;

var aboutMe;
var experience;
var education;
var skills;
var contact;

function init() {
    document.querySelector('#root').innerHTML = `
        <div id="navbar" class="fade-out-active"></div>
        <div id="dymanicDomContainer" class="container custom-container mt-5">
            <div id="inicio" class="card mb-4">
                <div class="card-body text-center">
                    <h1 class="card-title">Gonzalo Lobos</h1>
                    <p class="card-text lead">Ecommerce | Project Management | Web Development</p>
                    <button id="startButton" type="button" class="btn btn-primary">Entrar</button>
                </div>
            </div>
        </div>
        <div id="nav" class="container custom-container mt-5"></div>`;

    contenedorDom = document.querySelector('#dymanicDomContainer');
    navContainer = document.querySelector('#nav');
    navigationBar = document.querySelector('#navbar');



    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            aboutMe = data.aboutMe;
            experience = data.experience;
            education = data.education;
            skills = data.skills;
            contact = data.contact;

            document.querySelector('#startButton').addEventListener('click', () => {


                navigationBar.classList.remove("fade-out-active")
                navigationBar.classList.add("fade-in")



                navigationBar.innerHTML = `
                    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div class="container custom-container">
                            <a class="navbar-brand" id="aboutMe" href="#">Gonzalo Lobos</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" id="aboutMe" href="#">¿Quien Soy?</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="experience" href="#">Experiencia</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="education" href="#">Estudios</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="skills" href="#">Habilidades</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="contact" href="#">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>`;

                cargarAboutMe();

                querySelectors()
            });
        })
        .catch(error => console.error('Error loading data:', error));
}

function querySelectors() {

    function linkButtons(id, func) {
        document.querySelectorAll(id).forEach((button) => { button.addEventListener('click', func) })
    }
    linkButtons("#experience", cargarExperience)
    linkButtons('#aboutMe', cargarAboutMe);
    linkButtons('#education', cargarEducation);
    linkButtons('#skills', cargarSkills);
    linkButtons('#contact', cargarContact);
}


function setContent(newContent) {

    const oldContent = contenedorDom.firstElementChild;


    if (oldContent) {

        oldContent.classList.add('fade-out');

        oldContent.addEventListener('transitionend', () => {

            contenedorDom.innerHTML = newContent;

            const newElement = contenedorDom.firstElementChild;

            querySelectors()


        }, { once: true });
    } else {

        contenedorDom.innerHTML = newContent;
        const newElement = contenedorDom.firstElementChild;
        newElement.classList.add('fade-in');
        querySelectors()


    }




}

function cargarExperience() {
    console.log('experience activada');
    setContent(experience);

}

function cargarAboutMe() {
    setContent(aboutMe);
}

function cargarEducation() {
    setContent(education);
}

function cargarSkills() {
    setContent(skills);
}

function cargarContact() {
    setContent(contact);
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});
