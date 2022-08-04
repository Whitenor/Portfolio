var sideMenuFolder = document.querySelector('.sideMenuFolder');
var modalFormation = document.querySelector('.modalFormation');
var sideMenuHome = document.querySelector('.sideMenuHome');
var crossHome = document.querySelector('#crossHome');
var crossFolder = document.querySelector('#crossFolder');
var allSection = document.querySelectorAll('#content > section');
var pageAbout = document.querySelector('.about');
var pageFormation = document.querySelector('.formations');
var pageTechAndComp = document.querySelector('.techAndComp');
var pageProject = document.querySelector('.project');
var pageContact = document.querySelector('.contact');
var cardProject = document.querySelectorAll('.project > .card');
var modal = document.querySelector('.modal');
var titleProjectModal = document.querySelector('.titleProjectModal');
var imgModal = document.querySelector('.firstModalRow > .leftBlock > .leftCol > img');
var durationProject = document.querySelector('.durationProject');
var typeProject = document.querySelector('.typeProject');
var technoProject = document.querySelector('.technoProject');
var descriptionProject = document.querySelector('.descriptionProject');
var linkProject = document.querySelector('.linkProject');
var linkRepo = document.querySelector('.linkRepo');
var closeModal = document.querySelector('.closeModal');
var sideMenuProjectButton = document.querySelectorAll('.sideMenuFolder > ul > li >h2');
var listMenu = [sideMenuFolder, sideMenuHome];
var listCross = [crossFolder, crossHome];
var dwwm = document.querySelector('#DWWM');
var futurDev = document.querySelector('#futurDev');
var btsSio = document.querySelector('#btsSio');
var bacPro = document.querySelector('#bacPro');
var titleFormation = document.querySelector('.titleFormation');
var optionFormation = document.querySelector('.optionFormation');
var obtentionFormation = document.querySelector('.obtentionFormation');
var descriptionFormation = document.querySelector('.descriptionFormation');
const projectList = [
    {name: "popCode", description: "Basé sur les sites Popcorn garage et Popcorn TV , il nous a été demandé de crée une déclinaison basé les langages de programmations. La maquette nous était fournie par Alain Merucci et le cahier des charges ne contenait que peu de restrictions au niveau des technos pouvant être utilisés. Le responsive ne devait être qu'en partie gérer et afficher un message pour l'utilisateur si celui ci est une tablette ou un téléphone", link:"https://www.popcode.a-piron.fr", screenshot:"assets/img/popcode.jpg", periode:"du 25 Juin 2022 au 22 Juillet 2022", typeProjet:"Solo", techno:"HTML, CSS, JavaScript, Github , Git", repo:"https://github.com/Whitenor/ProjetJSPopcorn"},
    {name: "Creative", description: "Le but de ce projet était de réaliser une intégration basique avec HTML / CSS et Javascript. Le choix des technos n'avait qu'une seule restriction qui était de ne pas utiliser de framework CSS comme Bootstrap. nous étions incité à ajouter des animations en plus par rapport à la maquette.", link:"/devWebWebMobile/Creatives", screenshot:"assets/img/creative.jpg", periode:"du 17 au 23 Mai 2022",typeProjet:"En groupe",techno:"HTML, CSS, JavaScript, Github , Git",repo:"https://github.com/Whitenor/ProjectOneInteNoBootstrap"},
    {name:"Capgemen", description: "L'objectif de ce projet était de réaliser une intégration avec comme contrainte d'utiliser le framework CSS Bootstrap. La maquette nous était fournie.", link:"/devWebWebMobile/FirstBootstrap", screenshot:"assets/img/capgemen.jpg", periode:"du 7 au 14 Juin 2022",typeProjet:"Solo",techno:"HTML, CSS, Bootstrap, JavaScript, Github , Git",repo:"https://github.com/Whitenor/Bootstrap-Mobile-first"},
    {name:"Technews", description: "Ce projet est un projet de stage, il avait pour but de créer un site avec le CMS Wordpress centré sur les métiers lié au développement informatique. Il ne faisait pas partie des choses que nous deviosn voir lors de la formation à ce moment la mais cela nous a donné un bon aperçus de la suite. La gestion du projet était faite par le formateur (Loic Dauchy). Il s'est déroulé en deux temps. Tout d'abord du 25 au 27 Avril 2022 , avec la répartition en deux groupes, l'un dédié à la création de la maquette, l'autre à la recherche de données pour constituer un jeu d'essai. La seconde partie du projet à eu lieu du 28 Avril au 05 Mai 2022 avec une nouvelle répartition en deux équipes. La première centré sur l'intégration de la maquette via HTML/CSS, la seconde centré sur tout les appels de données afin de faire fonctionner le site proprement. Pour les deux parties j'ai d'abord fait partie du groupe Maquette puis du groupe Appel de Données Pour des raisons d'hébergement actuel , je ne l'ai pas remis en ligne", link:"", screenshot:"assets/img/technews.jpg", periode:"du 25 Avril au 05 Mai 2022",typeProjet:"En groupe",techno:"HTML, CSS, JavaScript, Github , Git, PHP, Wordpress", repo:"https://github.com/Whitenor/Technews"},
    {name: "Allojyve", description:"Ce projet nous a servis d'introduction à l'utilisation d'API ainsi qu'a la création dynamique via Javascript. Son but était de récupérer une liste de films à partir de l'API de The Movie Database et de les afficher afin de voir les films selon différents critéres. Les contraintes  pour ce projet étaient l'utilisation de l'API de The Movie Database et l'interdiction d'écriture de code en dur dans le HTML, tout devait etre généré à partir du Javascript.", link:"https://www.allojyve.a-piron.fr", screenshot:"assets/img/allojyve.jpg", periode:"du 30 Mars au 24 Avril 2022",typeProjet:"En groupe",techno:"HTML, CSS, JavaScript, Github , Git",repo:"https://github.com/Whitenor/allojyve"}
];
function checkBorder(target){
    if(target.classList.contains('borderNone') === false){
        setTimeout(() => {
            target.classList.toggle('borderNone');
        }, 500);
    }
    else{
        target.classList.toggle('borderNone');
    }
};
function checkOtherOpen(firstTarget, crossTarget ){
    if (firstTarget.classList.contains('open') === true) {
        firstTarget.classList.toggle('open');
        firstTarget.classList.toggle('hide');
        crossTarget.classList.toggle('crossRotate');
            checkBorder(firstTarget);
    }
};
function checkOpenSectionPrimary(){
    for (let i = 0; i < allSection.length; i++){
        if (allSection[i].classList.contains('active') === true) {
            allSection[i].classList.toggle('active');
            allSection[i].classList.toggle('none');
        }
    };
};
function mainButton(crossToRotate, menuFocus, menuToCheck, crossToCheck){
    crossToRotate.classList.toggle('crossRotate');
    menuFocus.classList.toggle('hide');
    menuFocus.classList.toggle('open');
    checkOtherOpen(menuToCheck, crossToCheck);
    checkBorder(menuFocus);
};
function subMenu(target) {
    checkOpenSectionPrimary();
    target.classList.toggle('none');
    target.classList.toggle('active');
};
function openModalCard(cibleClic){
    for (let i = 0; i < projectList.length; i++) {
        if ('screen'+projectList[i].name === cibleClic || 'title'+projectList[i].name === cibleClic || projectList[i].name=== cibleClic) {
            titleProjectModal.textContent = projectList[i].name;
            imgModal.src = projectList[i].screenshot;
            imgModal.alt = 'screenshot de '+projectList[i].name;
            durationProject.textContent = projectList[i].periode;
            typeProject.textContent = projectList[i].typeProjet;
            technoProject.textContent = projectList[i].techno;
            descriptionProject.textContent = projectList[i].description;
            if (projectList[i].link != "") {
                linkProject.href = projectList[i].link;
                linkProject.textContent = 'Aller sur '+projectList[i].name;
            }
            linkRepo.href = projectList[i].repo;
            linkRepo.textContent = 'Voir le code sur Github';
            modal.classList.toggle('none');
        }
        
    }
};
function subMenuHome(){
    crossHome.classList.toggle('crossRotate');
    sideMenuHome.classList.toggle('hide');
    sideMenuHome.classList.toggle('open');
    checkBorder(sideMenuHome);
};
function checkForButtonAbout(){
    if (sideMenuHome.classList.contains('open') === true) {
        sideMenuHome.classList.toggle('open');
        sideMenuHome.classList.toggle('hide');
        crossHome.classList.toggle('crossRotate');
        checkBorder(sideMenuHome);
    }
}
if (sessionStorage.getItem('position') === 'contact') {
    for (let i = 0; i < listMenu.length; i++) {
        checkOtherOpen(listMenu[i], listCross[i]);
    }
    checkOpenSectionPrimary();
    pageContact.classList.toggle('none');
    pageContact.classList.toggle('active');
    sessionStorage.removeItem('position');
};
document.querySelector('#homeSvg').addEventListener('click', function() {
    mainButton(crossHome, sideMenuHome, sideMenuFolder, crossFolder);
});
document.querySelector('#folderSvg').addEventListener('click', function() {
    mainButton(crossFolder, sideMenuFolder, sideMenuHome, crossHome);
    checkOpenSectionPrimary();
    pageProject.classList.toggle('none');
    pageProject.classList.toggle('active');
});
document.querySelector('#envelopSvg').addEventListener('click', function() {
    for (let i = 0; i < listMenu.length; i++) {
        checkOtherOpen(listMenu[i], listCross[i]);
    }
    checkOpenSectionPrimary();
    pageContact.classList.toggle('none');
    pageContact.classList.toggle('active');
});
document.querySelector('#aboutMenuButton').addEventListener('click', function() {
    subMenu(pageAbout);
    subMenuHome();
})
document.querySelector('#formationsMenuButton').addEventListener('click', function() {
    subMenu(pageFormation);
    subMenuHome();
})
document.querySelector('#techAndComp').addEventListener('click', function() {
    subMenu(pageTechAndComp);
    subMenuHome();
});
document.querySelector('#technoButtonAbout').addEventListener('click', function() {
    subMenu(pageTechAndComp);
    checkForButtonAbout();
});
document.querySelector('#projectButtonAbout').addEventListener('click', function() {
    pageProject.classList.toggle('none');
    pageProject.classList.toggle('active');
    pageAbout.classList.toggle('none');
    pageAbout.classList.toggle('active');
    checkForButtonAbout();
});
document.querySelector('#contactButtonAbout').addEventListener('click', function() {
    pageContact.classList.toggle('none');
    pageContact.classList.toggle('active');
    pageAbout.classList.toggle('none');
    pageAbout.classList.toggle('active');
    checkForButtonAbout();
})
for (let i = 0; i < cardProject.length; i++) {
    cardProject[i].addEventListener('click', function(e) {
        openModalCard(e.target.id);
        if (sideMenuFolder.classList.contains('open')===true) {
            crossFolder.classList.toggle('crossRotate');
            sideMenuFolder.classList.toggle('hide');
            sideMenuFolder.classList.toggle('open');
            checkBorder(sideMenuFolder);
        }
    });  
};
for (let i = 0; i < sideMenuProjectButton.length; i++) {
    sideMenuProjectButton[i].addEventListener('click', function(e) {
        openModalCard(e.target.classList[0]);
        mainButton(crossFolder, sideMenuFolder, sideMenuHome, crossHome, pageProject);
    });    
};
closeModal.addEventListener('click', function() {
    modal.classList.toggle('none');
});
dwwm.addEventListener('click', function() {
    fetch('assets/js/formations.json').then(response => response.json()).then(data => {
        titleFormation.textContent = data.DWWM.type+' '+ data.DWWM.nom;
        optionFormation.textContent = "";
        obtentionFormation.textContent = "Obtention: "+data.DWWM.obtention;
        descriptionFormation.textContent = data.DWWM.description;
    });
    modalFormation.classList.toggle('none');
});
futurDev.addEventListener('click', function() {
    fetch('assets/js/formations.json').then(response => response.json()).then(data => {
        titleFormation.textContent = data.futurDev.type+' '+ data.futurDev.nom;
        optionFormation.textContent = "";
        obtentionFormation.textContent = "Obtention: "+data.futurDev.obtention;
        descriptionFormation.textContent = data.futurDev.description;
    });
    modalFormation.classList.toggle('none');
});
btsSio.addEventListener('click', function() {
    fetch('assets/js/formations.json').then(response => response.json()).then(data => {
        titleFormation.textContent = data.btsSio.type+' '+ data.btsSio.nom;
        optionFormation.textContent = "Option: "+data.btsSio.option;
        obtentionFormation.textContent = "Obention: "+data.btsSio.obtention;
        descriptionFormation.textContent = data.btsSio.description;
    });
    modalFormation.classList.toggle('none');
});
bacPro.addEventListener('click', function() {
    fetch('assets/js/formations.json').then(response => response.json()).then(data => {
        titleFormation.textContent = data.bacPro.type+' '+ data.bacPro.nom;
        optionFormation.textContent = "Option: "+data.bacPro.option;
        obtentionFormation.textContent = "Obention: "+data.bacPro.obtention;
        descriptionFormation.textContent = data.bacPro.description;
    });
    modalFormation.classList.toggle('none');
});
modalFormation.addEventListener('click', function(e) {
    if (e.target.classList.contains('modalFormation') || e.target.classList.contains('closeModalFormation')) {
        modalFormation.classList.toggle('none');
    }
})
document.querySelector('#submit').addEventListener('click', function() {
    sessionStorage.setItem('position', 'contact');
})