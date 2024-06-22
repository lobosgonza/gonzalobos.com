import data from './data.js';

var contenedorDom;
var navContainer;
var navigationBar;



var start = data.start;
var navBar = data.navBar;
var aboutMe = data.aboutMe;
var experience = data.experience;
var education = data.education;
var skills = data.skills;
var contact = data.contact;

function init() {
    console.log("init start");

    document.querySelector('#root').innerHTML = start;

    contenedorDom = document.querySelector('#dymanicDomContainer');
    navContainer = document.querySelector('#nav');
    navigationBar = document.querySelector('#navbar');




    document.querySelector('#startButton').addEventListener('click', () => {

        contenedorDom.classList.remove('fade-in')
        // contenedorDom.classList.add('fade-out')

        navigationBar.innerHTML = navBar;
        navigationBar.classList.add("fade-in")
        navigationBar.classList.remove("fade-out-active")


        setContent(aboutMe)
        querySelectors()


    });



}

function querySelectors() {

    function linkButtons(id, data) {
        document.querySelectorAll(id).forEach((button) => { button.addEventListener('click', () => setContent(data)) })
    }
    linkButtons('#experience', experience)
    linkButtons('#aboutMe', aboutMe);
    linkButtons('#education', education);
    linkButtons('#skills', skills);
    linkButtons('#contact', contact);
}


function setContent(newContent) {

    const oldContent = contenedorDom.firstElementChild;


    contenedorDom.innerHTML = newContent;


    querySelectors()

}





document.addEventListener('DOMContentLoaded', function () {
    init();
});
