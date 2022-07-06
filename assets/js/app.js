var sideMenuFolder = document.querySelector('.sideMenuFolder');
var sideMenuHome = document.querySelector('.sideMenuHome');
var crossHome = document.querySelector('#crossHome');
var crossFolder = document.querySelector('#crossFolder');
var allSection = document.querySelectorAll('#content > section');
var pageAbout = document.querySelector('.about');
var pageFormation = document.querySelector('.formations');
var pageTechAndComp = document.querySelector('.techAndComp');
var sectionCheckNow = '';
var borderChecking = 0;
var openChecking = 0;
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
    mainButton(crossFolder, sideMenuFolder, sideMenuHome, crossHome, pageAbout);
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