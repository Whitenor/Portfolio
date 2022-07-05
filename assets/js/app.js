var sideMenuFolder = document.querySelector('.sideMenuFolder');
var sideMenuHome = document.querySelector('.sideMenuHome');
var crossHome = document.querySelector('#crossHome');
var crossFolder = document.querySelector('#crossFolder');
var allSection = document.querySelectorAll('#content > section');
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



document.querySelector('#homeSvg').addEventListener('click', function() {
    crossHome.classList.toggle('crossRotate');
    sideMenuHome.classList.toggle('hide');
    sideMenuHome.classList.toggle('open');
    checkOtherOpen(sideMenuFolder, crossFolder);
    checkBorder(sideMenuHome);
    checkOpenSectionPrimary();
    document.querySelector('.about').classList.toggle('none');
    document.querySelector('.about').classList.toggle('active');
});
document.querySelector('#folderSvg').addEventListener('click', function() {
    crossFolder.classList.toggle('crossRotate');
    sideMenuFolder.classList.toggle('hide');
    sideMenuFolder.classList.toggle('open');
    checkOtherOpen(sideMenuHome, crossHome);
    checkBorder(sideMenuFolder);
    checkOpenSectionPrimary();
    document.querySelector('.project').classList.toggle('none');
    document.querySelector('.project').classList.toggle('active');
});
document.querySelector('#aboutMenuButton').addEventListener('click', function() {
    checkOpenSectionPrimary();
    document.querySelector('.about').classList.toggle('none');
    document.querySelector('.about').classList.toggle('active');
})
document.querySelector('#formationsMenuButton').addEventListener('click', function() {
    checkOpenSectionPrimary();
    document.querySelector('.formations').classList.toggle('none');
    document.querySelector('.formations').classList.toggle('active');
})
document.querySelector('#techAndComp').addEventListener('click', function() {
    checkOpenSectionPrimary();
    document.querySelector('.techAndComp').classList.toggle('none');
    document.querySelector('.techAndComp').classList.toggle('active');
})
