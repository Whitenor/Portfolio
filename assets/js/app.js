var sideMenuFolder = document.querySelector('.sideMenuFolder');
var sideMenuHome = document.querySelector('.sideMenuHome');
var crossHome = document.querySelector('#crossHome');
var crossFolder = document.querySelector('#crossFolder');
var allSection = document.querySelectorAll('#content > section');
var pageAbout = document.querySelector('.about');
var pageFormation = document.querySelector('.formations');
var pageTechAndComp = document.querySelector('.techAndComp');
var pageProject = document.querySelector('.project');
var sectionCheckNow = '';
var borderChecking = 0;
var openChecking = 0;
const projectList = [
    {name: "popCode", description: "Basé sur les sites Popcorn garage et Popcorn TV , il nous a été demandé de crée une déclinaison basé les langages de programmations. La maquette nous était fournie par Alain Merucci et le cahier des charges ne contenait que peu de restrictions au niveau des technos pouvant être utilisés. Le responsive ne devait être qu'en partie gérer et afficher un message pour l'utilisateur si celui ci est une tablette ou un téléphone", link:"www.popcode.a-piron.fr", screenshot:"assets/img/popCode.jpg", periode:"du 25 Juin 2022 au 22 Juillet 2022", typeProjet:"Solo"},
    {name: "Creative", description: "Le but de ce projet était de réaliser une intégration basique avec HTML / CSS et Javascript. Le choix des technos n'avait qu'une seule restriction qui était de ne pas utiliser de framework CSS comme Bootstrap. nous étions incité à ajouter des animations en plus par rapport à la maquette.", link:"/devWebWebMobile/Creatives", screenshot:"assets/img/creative.jpg", periode:"du 17 au 23 Mai 2022",typeProjet:"En groupe"},
    {name:"Capgemen", description: "L'objectif de ce projet était de réaliser une intégration avec comme contrainte d'utiliser le framework CSS Bootstrap. La maquette nous était fournie.", link:"/devWebWebMobile/FirstBootstrap", screenshot:"assets/img/capgemen.jpg", periode:"du 7 au 14 Juin 2022",typeProjet:"Solo"},
    {name:"Technews", description: "Ce projet est un projet de stage, il avait pour but de créer un site avec le CMS Wordpress centré sur les métiers lié au développement informatique. Il ne faisait pas partie des choses que nous deviosn voir lors de la formation à ce moment la mais cela nous a donné un bon aperçus de la suite. La gestion du projet était faite par le formateur (Loic Dauchy). Il s'est déroulé en deux temps. Tout d'abord du 25 au 27 Avril 2022 , avec la répartition en deux groupes, l'un dédié à la création de la maquette, l'autre à la recherche de données pour constituer un jeu d'essai. La seconde partie du projet à eu lieu du 28 Avril au 05 Mai 2022 avec une nouvelle répartition en deux équipes. La première centré sur l'intégration de la maquette via HTML/CSS, la seconde centré sur tout les appels de données afin de faire fonctionner le site proprement. Pour les deux parties j'ai d'abord fait partie du groupe Maquette puis du groupe Appel de Données Pour des raisons d'hébergement actuel , je ne l'ai pas remis en ligne", link:"", screenshot:"assets/img/technews.jpg", periode:"du 25 Avril au 05 Mai 2022",typeProjet:"En groupe"},
    {name: "Allojyve", description:"Ce projet nous a servis d'introduction à l'utilisation d'API ainsi qu'a la création dynamique via Javascript. Son but était de récupérer une liste de films à partir de l'API de The Movie Database et de les afficher afin de voir les films selon différents critéres. Les contraintes  pour ce projet étaient l'utilisation de l'API de The Movie Database et l'interdiction d'écriture de code en dur dans le HTML, tout devait etre généré à partir du Javascript.", link:"www.allojyve.a-piron.fr", screenshot:"assets/img/allojyve.jpg", periode:"du 30 Mars au 24 Avril 2022",typeProjet:"En groupe"}
]
function checkBorder(target){
    for (let i = 0; i < target.classList.length; i++) {
        if(target.classList[i] === 'borderNone'){
            borderChecking = 1
        }
    }
    if(borderChecking === 0){
        setTimeout(() => {
            target.classList.toggle('borderNone');
        }, 500);
    }
    else{
        target.classList.toggle('borderNone');
        borderChecking = 0;
    }
}
function checkOtherOpen(firstTarget, crossTarget ){
    for (let i = 0; i < firstTarget.classList.length; i++) {
        if(firstTarget.classList[i] === 'open'){
            openChecking = 1;
        }
    }
    if (openChecking === 1) {
        firstTarget.classList.toggle('open');
        firstTarget.classList.toggle('hide');
        crossTarget.classList.toggle('crossRotate');
        openChecking = 0;
        checkBorder(firstTarget);
    }
}
function checkOpenSectionSecondary(target){
    for (let i = 0; i < target.classList.length; i++) {
        if(target.classList[i] === 'active'){
            openChecking = 1;
        }
    }
    if (openChecking === 1) {
        target.classList.toggle('active');
        target.classList.toggle('none');
        openChecking = 0;
    }
}
function checkOpenSectionPrimary(){
    for (let i = 0; i < allSection.length; i++){
        sectionCheckNow = allSection[i];
        checkOpenSectionSecondary(sectionCheckNow);
    };
}
function mainButton(crossToRotate, menuFocus, menuToCheck, crossToCheck, pageTarget){
    crossToRotate.classList.toggle('crossRotate');
    menuFocus.classList.toggle('hide');
    menuFocus.classList.toggle('open');
    checkOtherOpen(menuToCheck, crossToCheck);
    checkBorder(menuFocus);
    checkOpenSectionPrimary();
    pageTarget.classList.toggle('none');
    pageTarget.classList.toggle('active');
}
function subMenu(target) {
    checkOpenSectionPrimary();
    target.classList.toggle('none');
    target.classList.toggle('active');
}

document.querySelector('#homeSvg').addEventListener('click', function() {
    mainButton(crossHome, sideMenuHome, sideMenuFolder, crossFolder, pageAbout);
});
document.querySelector('#folderSvg').addEventListener('click', function() {
    mainButton(crossFolder, sideMenuFolder, sideMenuHome, crossHome, pageProject);
});


document.querySelector('#aboutMenuButton').addEventListener('click', function() {
    subMenu(pageAbout);
})
document.querySelector('#formationsMenuButton').addEventListener('click', function() {
    subMenu(pageFormation);
})
document.querySelector('#techAndComp').addEventListener('click', function() {
    subMenu(pageTechAndComp);
});